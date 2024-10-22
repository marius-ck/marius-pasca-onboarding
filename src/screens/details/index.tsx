import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const WeatherDetails: React.FC<Props> = ({ route }) => {
  const city = route.params.city;

  return <View style={styles.backgroud}>
    <Text>{city.name}</Text>
  </View>
};

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
  },
  cityContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cityWeather: {
    fontSize: 14,
  },
});

export default WeatherDetails;
