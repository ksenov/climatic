import axios from 'axios';

const API_URL = import.meta.env.VITE_OPENWEATHER_CITIES_API_URL;
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCitiesNames = async (text: string): Promise<Array<string>> => {
    try {
        const response = await axios.get<Array<string>>(`${API_URL}/weather`, {
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