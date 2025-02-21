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
        <header className="w-auto bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md mx-6 mt-2 rounded-lg">
            <h1 className="text-2xl font-bold">Climatic</h1>
            <div >
                <SearchCityInput />
            </div>
            <Button  className="bg-white text-blue-600">
                O
            </Button>
        </header>
    )
}

export default Header;