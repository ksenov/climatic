import React, { createContext, useState, useContext, ReactNode } from 'react';
import { WeatherData } from '../interfaces/WeatherData';

interface WeatherContextProps {
    weather: WeatherData | null;
    setWeather: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    return (
        <WeatherContext.Provider value={{ weather, setWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};