import { useEffect, useState } from "react";
import { CityData } from "../interfaces/CityData";
import { getWeatherByCity, getCitiesNames } from "../services/weatherService";
import { useWeather } from "../context/WeatherContext";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

const Header = () => {
    const { setWeather } = useWeather();
    const [city, setCity] = useState("");
    const [citySuggestions, setCitySuggestions] = useState<CityData[]>([]);
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    const getSuggestions = async (query: string) => {
        if (!query.trim()) {
            setCitySuggestions([]);
            return;
        }

        try {
            const cities = await getCitiesNames(query);
            setCitySuggestions(cities);
            console.log("Найденные города:", cities);
        } catch (error) {
            console.error("Ошибка при поиске городов:", error);
        }
    };

    const getWeather = async (cityName: string) => {
        try {
            const weather = await getWeatherByCity(cityName);
            setWeather(weather);
            console.log("Найденная погода:", weather);
        } catch (error) {
            console.error("Ошибка при получении погоды:", error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCity = event.target.value;
        setCity(newCity);
        console.log('setCity =>' + newCity);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const timeout = setTimeout(() => {
            getSuggestions(newCity);
        }, 1000);

        setDebounceTimeout(timeout);
    };

    const handleSubmit = async () => {
        if (!city.trim()) return;

        try {
            console.log('city: ' + city )
            const cities = await getCitiesNames(city);
            setCitySuggestions(cities)
            console.log("Найденные города:", cities);
        } catch (error) {
            console.error("Ошибка при поиске городов:", error);
            alert("Ошибка при поиске городов. Попробуйте еще раз.");
        }
    }

    const handleSelectCity = (selectedCity: string) => {
        setCity(selectedCity);
        setCitySuggestions([]);
        getWeather(selectedCity);
    };

    useEffect(() => {
        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [debounceTimeout]);

    return (
        <header className="w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">Climatic</h1>
            <div className="relative">
                <Input
                  type="text"
                  placeholder="Введите город..."
                  value={city}
                  onChange={handleInputChange}
                  className="px-4 py-2 rounded-md text-red-950 outline-none"
                />
                {citySuggestions.length > 0 && (
                        <ul className="absolute left-0 right-0 bg-white text-black  mt-1rounded-md shadow-lg z-10">
                            {citySuggestions.map((citySuggestions, index) => (
                                <li 
                                    key={index} 
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer" 
                                    onClick={() => handleSelectCity(citySuggestions.name)}
                                >
                                    {citySuggestions.name} ({citySuggestions.country})
                                </li>
                            ))}
                        </ul>
                )}
            </div>
            <Button
                onPress={handleSubmit}
                color="primary"
                variant="shadow" >
                    Поиск
            </Button>
        </header>
    )
}

export default Header;


// className="bg-white text-blue-500 px-4 py-2 rounded-md  font-boldhover:bg-gray-200 transition"