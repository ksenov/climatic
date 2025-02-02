import React from "react";

interface WeatherProps {
    weatherType: string;
    temperature: number;
}

const WeatherMain: React.FC<WeatherProps> = ({ weatherType, temperature }) => {
    const weatherIcons: Record<string, string> = {
        Clear: "☀️", 
        Clouds: "☁️",
        Rain: "🌧️",
        Thunderstorm: "⛈️",
        Snow: "❄️",
        Mist: "🌫️",
    };

    const weatherIcon = weatherIcons[weatherType] || "❓";

    return (
        <div className="flex h-96 flex-col justify-center items-center h-96 bg-blue-300">
            <div className="flex space-x-2">
                <p className="text-4xl">{weatherIcon}</p>
                <p className="text-4xl font-bold">{temperature}°C</p>
            </div>
            
        </div>
    )
}

export default WeatherMain;