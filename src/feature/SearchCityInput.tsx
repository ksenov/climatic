import { memo, useCallback, useState } from 'react';
import { Autocomplete, AutocompleteItem } from '@heroui/autocomplete';
import { debounce } from '../utils/debounce';
import { CityData } from '../interfaces/CityData';
import { useWeather } from '../context/WeatherContext';
import { getCitiesNames, getWeatherByCity } from '../services/weatherService';

const SearchCityInput = memo(() => {
    const [inputValue, setInputValue] = useState("");
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
        setInputValue(value);
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
      setInputValue('');
    };

    return (
        <Autocomplete
          type="text"
          items={options}
          inputValue={inputValue}
          isLoading={loading}
          onInputChange={handleInputChange}
          onSelectionChange={handleSelectionChange}
          aria-label="Search for cities"
          placeholder="Поиск города..."
          className={`w-full max-w-md`}
          listboxProps={{
            className: "z-10 transition-none",
          }}
        >
            {(item) => (
                <AutocompleteItem key={`${item.name}-${item.country}-${item.lat}-${item.lon}`}>
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