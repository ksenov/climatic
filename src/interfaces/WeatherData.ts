export interface WeatherData {
    coord: Coordinates;
    weather: WeatherCondition[];
    base: string;
    main: MainWeatherData;
    visibility: number;
    wind: WindData;
    clouds: CloudsData;
    dt: number;
    sys: SystemData;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface Coordinates {
    lon: number;
    lat: number;
}

interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface WindData {
    speed: number;
    deg: number;
    gust: number;
}

interface CloudsData {
    all: number;
}

interface SystemData {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}