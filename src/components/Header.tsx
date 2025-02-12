import { useState } from "react";
import { getWeatherByCity } from "../services/weatherService";
import { useWeather } from "../context/WeatherContext";
import { Button } from "@heroui/button";
import SearchCityInput from "../feature/SearchCityInput";

const Header = () => {
    const { setWeather } = useWeather();
    const [city] = useState("");

    const getWeather = async (cityName: string) => {
        try {
            const weather = await getWeatherByCity(cityName);
            setWeather(weather);
            console.log("Найденная погода:", weather);
        } catch (error) {
            console.error("Ошибка при получении погоды:", error);
        }
    };

    const handleSubmit = async () => {
        if (!city.trim()) return;

        try {
            await getWeather(city);
        } catch (error) {
            console.error("Ошибка при поиске городов:", error);
            alert("Ошибка при поиске городов. Попробуйте еще раз.");
        }
    }

    return (
        <header className="w-full bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">Climatic</h1>
            <div>
                <SearchCityInput />
            </div>
            <Button onPress={handleSubmit} color="primary" variant="shadow">
                Поиск
            </Button>
        </header>
    )
}

export default Header;