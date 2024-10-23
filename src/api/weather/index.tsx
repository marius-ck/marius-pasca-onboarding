import { QueryFunction, useQuery } from "@tanstack/react-query";
import { API_KEY } from "@env"
import { WeatherData } from "./types";

const cityIds = [
    703448, // Kyiv, UA
    692194, // Sumy, UA
    756135, // Warsaw, PL
    3081368, // Wrocław, PL
    3067696, // Prague, CZ
    3077916, // České Budějovice, CZ
    2950159, // Berlin, DE
    2867714, // Munich, DE
    3247449, // Aachen, DE
    5815135, // Washington, US
    5128581, // New York City, US
];

const fetchGroupCities: QueryFunction<WeatherData[]> = async () => {
    const cityIdsString = cityIds.join(',');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${cityIdsString}&appid=${API_KEY}&units=imperial`);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data.list;
};

export function useGroupWeather() {
    return useQuery({ queryKey: ['groupWeather'], queryFn: fetchGroupCities });
}