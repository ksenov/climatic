export interface WeatherResponse {
    main: {
        temp: number;
      };
      weather: {
        description: string;
        icon: string;
      }[];
      name: string;
}