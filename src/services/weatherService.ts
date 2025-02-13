import axios from 'axios';

import { WeatherData } from '../interfaces/WeatherData';
import { CityData } from '../interfaces/CityData';
import { WeatherForecastData } from '../interfaces/WeatherForecast';

const API_WEATHER_URL = import.meta.env.VITE_OPENWEATHER_WEATHER_API_URL;
const API_WEATHER_FORECAST_URL = import.meta.env.VITE_OPENWEATHER_WEATHER_FORECAST_API_URL;
const API_CITY_URL = import.meta.env.VITE_OPENWEATHER_CITIES_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCitiesNames = async (text: string): Promise<CityData[]> => {
    try {
        const response = await axios.get<CityData[]>(`${API_CITY_URL}`, {
            params: {
                q: text,
                limit: 5,
                appid: API_KEY
            },
        });
        return response.data;
    } catch (error) {
        console.log('Ошибка при получении списка городов:', error);
        throw error;
    }
    
}

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
    try {
        const response = await axios.get<WeatherData>(`${API_WEATHER_URL}`, {
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
        const response = await axios.get<WeatherData>(`${API_WEATHER_URL}`, {
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

export const getWeatherForecastByGeo = async (lat: number, lon: number): Promise<WeatherForecastData> => {
    try {
        const response = await axios.get<WeatherForecastData>(`${API_WEATHER_FORECAST_URL}`, {
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
        console.log('Ошибка при получении погоды на 5 дней по гео:', error)
        throw error;
    }
}