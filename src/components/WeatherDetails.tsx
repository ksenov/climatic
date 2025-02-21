import { useWeather } from '../context/WeatherContext';

const WeatherDetails = () => {
    const { weather } = useWeather();

    if (!weather) {
        return <div>Погода не найдена</div>;
    }

    return (
        <div className="p-6 space-y-3">
            <div className='flex space-x-3'>
                <div className="w-full bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Ощущается</h2>
                    <p>{weather.main.feels_like}°C</p>
                </div>
                <div className="w-full bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Описание погоды</h2>
                    <p>{weather.weather[0].description}</p>
                </div>
                <div className="w-full bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Макс / Мин темп.</h2>
                    <p>{weather.main.temp_max}°C / {weather.main.temp_min}°C</p>
                </div>
            </div>
            
            <div className='flex space-x-3'>
                <div className="w-full bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Влажность</h2>
                    <p>{weather.main.humidity}%</p>
                </div>
                <div className="w-full bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Давление</h2>
                    <p>{weather.main.pressure} гПа</p>
                </div>
                <div className="w-full bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold">Скорость ветра</h2>
                    <p>{weather.wind.speed} м/с, {weather.wind.deg}°</p>
                </div>
            </div>
            
            
            <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold">Видимость</h2>
                <p>{weather.visibility} м</p>
            </div>
        </div>
    );
};

export default WeatherDetails;
