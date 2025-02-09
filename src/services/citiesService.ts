import axios from 'axios';
import { CityData } from '../interfaces/CityData';

const API_URL = import.meta.env.VITE_OPENWEATHER_CITIES_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCitiesNames = async (text: string): Promise<CityData[]> => {
    try {
        const response = await axios.get<CityData[]>(`${API_URL}`, {
            params: {
                q: text,
                limit: 3,
                appid: API_KEY
            },
        });
        return response.data;
    } catch (error) {
        console.log('Ошибка при получении списка городов:', error);
        throw error;
    }
    
}