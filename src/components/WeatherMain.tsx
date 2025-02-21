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
        <div className="bg-gradient-to-b from-blue-600 to-custom-indigo h-72 flex justify-center rounded-lg shadow-lg m-6 p-6 text-white">
            
            <div className="w-full flex flex-col items-center justify-center">
                <p className="text-5xl font-exo2 mb-6">{weather.name}</p>
                
                <div className='flex'>
                    <p className="text-2xl mr-6">🌡{weather?.main.feels_like}</p>
                    <p className="text-2xl">💧{weather?.main.humidity} %</p>
                </div>
                <div className='flex'>
                    <p className="text-2xl mr-6">☁{weather?.weather[0].description}</p>
                    <p className="text-2xl">💨{weather?.wind.speed} м/с</p>
                </div>
                
                
            </div>

            <div className="w-full flex items-center justify-center">
                <div className="flex items-center space-x-2 mb-6">
                    <p className="text-5xl">{weatherIcon}</p>
                    <p className="text-5xl font-exo">{weather.main.temp}°C</p>
                </div>
            </div>
            
        </div>
    )
}

export default WeatherMain;