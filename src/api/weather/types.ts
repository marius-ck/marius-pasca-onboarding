export interface WeatherData {
    coord: Coordinates;
    weather: Weather[];
    base: string;
    main: MainWeatherData;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
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

interface Weather {
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
    sea_level?: number;
    grnd_level?: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust?: number;
}

interface Clouds {
    all: number;
}

interface SystemData {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
}
