import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherDetails from './';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/types';
import { WEATHER_DATA } from '@api/weather/mock';

const mockRoute = {
    params: {
        data: WEATHER_DATA[0],
    },
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const mockNavigation = {} as any;

describe('WeatherDetails Component', () => {
    it('renders the weather stats correctly', () => {
        const { getByText } = render(<WeatherDetails route={mockRoute as Props['route']} navigation={mockNavigation} />);

        expect(getByText('Humidity')).toBeTruthy();
        expect(getByText('40%')).toBeTruthy();

        expect(getByText('Pressure')).toBeTruthy();
        expect(getByText('1029 hPa')).toBeTruthy();

        expect(getByText('Wind Speed')).toBeTruthy();
        expect(getByText('0.5 mph')).toBeTruthy();

        expect(getByText('Cloud Cover')).toBeTruthy();
        expect(getByText('85%')).toBeTruthy();
    });

    it('renders the CityWeather component', () => {
        const { getByTestId } = render(<WeatherDetails route={mockRoute as Props['route']} navigation={mockNavigation} />);

        expect(getByTestId('city_weather_component')).toBeTruthy();
    });
});
