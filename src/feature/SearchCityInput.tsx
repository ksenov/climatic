import { memo, useCallback, useState } from 'react';
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';
import { debounce } from '../utils/debounce';
import { CityData } from '../interfaces/CityData';
import { useWeather } from '../context/WeatherContext';
import { getCitiesNames, getWeatherByCity } from '../services/weatherService';

const SearchCityInput = memo(() => {
    const [options, setOptions] = useState<CityData[]>([]);
    const [loading, setLoading] = useState(false);
    const { setWeather } = useWeather();  

    const fetchCities = useCallback(debounce(async (searchText: string) => {
        if (!searchText) {
            setOptions([]);
            return;
        }
        try {
            setLoading(true);
            const cities = await getCitiesNames(searchText);
            setOptions(cities);
        } catch (error) {
            console.error('Ошибка при получении города:', error);
            setOptions([]);
        } finally {
            setLoading(false);
        }
    }, 300), []);

    const handleInputChange = (value: string) => {
        fetchCities(value.trim());
    };

    const handleSelectionChange = async (selectedKey: React.Key | null) => {
      if (!selectedKey) return;
      
      const selectedCity = options.find((city) => city.name === String(selectedKey).split('-')[0]); 

      if (selectedCity) {
        console.log('Выбранный город:', selectedCity);
        try {
          const weatherData = await getWeatherByCity(selectedCity.name);
          console.log('Найденная погода:', weatherData);
          setWeather(weatherData);
        } catch (error) {
          console.error('Ошибка при загрузке погоды:', error);
        }
      }
    };

    return (
        <Autocomplete
          type="text"
          menuTrigger='input'
          autoFocus={true}
          items={options}
          isLoading={loading}
          onInputChange={handleInputChange}
          onSelectionChange={handleSelectionChange}
          aria-label="Search for cities"
          placeholder="Поиск города..."
          className={`w-96`}
          radius="full"
          listboxProps={{
            hideSelectedIcon: true,
            itemClasses: {
              base: [
                "rounded-medium",
                "text-default-500",
                "data-[hover=true]:text-foreground",
                "dark:data-[hover=true]:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[hover=true]:bg-default-200",
                "data-[selectable=true]:focus:bg-default-300",
                "data-[focus-visible=true]:ring-default-700",
              ],
            },
          }}
        >
            {(item) => (
                <AutocompleteItem key={`${item.name}-${item.country}-${item.lat}-${item.lon}`} textValue=''>
                  <div className="p-2 !cursor-pointer">
                    <div className="font-medium">{item.name}</div>
                    {item.state && <span className="text-sm mr-1">{item.state},</span>}
                    <span className="text-sm">{item.country}</span>
                  </div>
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
});

export default SearchCityInput;