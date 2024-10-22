import { useInfiniteQuery, QueryFunction } from "@tanstack/react-query";
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

const fetchCitiesWeather: QueryFunction<WeatherData[], string[], number> = async ({ pageParam }) => {
    const startIndex = pageParam * 5;
    const endIndex = startIndex + 5;
    const cityBatch = cityIds.slice(startIndex, endIndex);

    const cityPromises = cityBatch.map(cityId =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
    );

    return Promise.all(cityPromises);
};

export function useGetWeather() {
    const query = useInfiniteQuery({
        queryKey: ['citiesWeather'],
        queryFn: fetchCitiesWeather,
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => {
            const totalFetchedCities = allPages.flat().length;
            return totalFetchedCities < cityIds.length ? allPages.length : undefined;
        },
    });

    const fetchNextPage = () => {
        if (query.hasNextPage) {
            query.fetchNextPage()
        }
    }

    return { ...query, fetchNextPage };
}