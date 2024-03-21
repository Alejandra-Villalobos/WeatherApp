export interface TodayWeather {
    city: string;
    sunrise: number;
    sunset: number;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  }

  export interface Forecast {
    city: string;
    date: string;
    temperatureMax: number;
    temperatureMin: number;
    description: string;
    icon: string;
  }
