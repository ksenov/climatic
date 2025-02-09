import axios from 'axios';

import { WeatherData } from '../interfaces/WeatherData';

const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
    try {
        const response = await axios.get<WeatherData>(`${API_URL}`, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'ru',
            },
        });
        return response.data;
    } catch (error) {
        console.log('Ошибка при получении погоды по городу:', error)
        throw error;
    }
}

export const getWeatherByGeo = async (lat: number, lon: number): Promise<WeatherData> => {
    try {
        const response = await axios.get<WeatherData>(`${API_URL}`, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric',
                lang: 'ru',
            },
        });
        return response.data;
    } catch (error) {
        console.log('Ошибка при получении погоды по гео:', error)
        throw error;
    }
}