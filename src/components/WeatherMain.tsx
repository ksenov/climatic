import { useWeather } from '../context/WeatherContext';

const WeatherMain = () => {
    const { weather } = useWeather();

    if (!weather) {
        return <div>Погода не найдена</div>;
    }
    
    const weatherIcons: Record<string, string> = {
        Clear: "☀️", // Ясно
        Clouds: "☁️", // Облачно
        FewClouds: "🌤️", // Малооблачно
        ScatteredClouds: "⛅", // Рассеянные облака
        BrokenClouds: "🌥️", // Облачно с прояснениями
        OvercastClouds: "☁️", // Пасмурно
    
        Rain: "🌧️", // Дождь
        LightRain: "🌦️", // Легкий дождь
        HeavyRain: "🌧️💦", // Сильный дождь
        FreezingRain: "❄️🌧️", // Ледяной дождь
        ShowerRain: "🌧️💨", // Ливневый дождь
    
        Thunderstorm: "⛈️", // Гроза
        LightThunderstorm: "🌩️", // Слабая гроза
        HeavyThunderstorm: "⛈️⚡", // Сильная гроза
    
        Drizzle: "🌦️", // Морось
        LightDrizzle: "🌦️", // Легкая морось
        HeavyDrizzle: "🌧️", // Сильная морось
    
        Snow: "❄️", // Снег
        LightSnow: "🌨️", // Легкий снег
        HeavySnow: "❄️❄️", // Сильный снег
        Sleet: "🌧️❄️", // Дождь со снегом
        SnowShowers: "🌨️💨", // Ливневый снегопад
    
        Mist: "🌫️", // Дымка
        Fog: "🌁", // Туман
        Haze: "🌫️", // Мгла
        Smoke: "🔥🌫️", // Дым
        Sand: "🏜️", // Песчаная буря
        Dust: "🌪️", // Пыльная буря
        Squalls: "💨", // Шквальный ветер
        Tornado: "🌪️", // Торнадо
    
        VolcanicAsh: "🌋", // Вулканический пепел
    };

    const weatherIcon = weatherIcons[weather?.weather[0].main] || "❓";

    return (
        <div className="h-96 flex flex-col justify-center items-center bg-blue-300 rounded-lg shadow-lg m-4">
            <p className="text-5xl  font-semibold mt-4 pb-6">{weather.name}</p>
            <div className="flex items-center space-x-2">
                <p className="text-6xl">{weatherIcon}</p>
                <p className="text-5xl">{weather.main.temp}°C</p>
            </div>
            <p className="text-3xl">{weather?.weather[0].description}</p>
        </div>
    )
}

export default WeatherMain;