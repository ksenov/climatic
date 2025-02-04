import axios from 'axios';

import { WeatherResponse } from '../interfaces/WeatherResponse';

const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeatherByCity = async (city: string): Promise<WeatherResponse> => {
    try {
        const response = await axios.get<WeatherResponse>(`${API_URL}/weather`, {
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

export const getWeatherByGeo = async (lat: number, lon: number): Promise<WeatherResponse> => {
    try {
        const response = await axios.get<WeatherResponse>(`${API_URL}/weather`, {
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