import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RootStackParamList } from '../../navigation/types';
import CityWeather from '../../components/CityWeather';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const WeatherDetails: React.FC<Props> = ({ route }) => {
  const { data } = route.params;
  const stats = [{
    text: 'Humidity',
    value: `${data.main.humidity}%`
  }, {
    text: 'Pressure',
    value: `${data.main.pressure} hPa`
  }, {
    text: 'Wind Speed',
    value: `${data.wind.speed.toFixed(2)} mph`
  }, {
    text: 'Cloud Cover',
    value: `${data.clouds.all}%`
  }];

  const renderStat = (stat: typeof stats[0], index: number) => {
    return <View key={index} style={styles.statContainer}>
      <Text style={styles.statText}>{stat.text}</Text>
      <Text style={styles.statValue}>{stat.value}</Text>
    </View>
  }

  return <View style={styles.container}>
    <View style={styles.header}>
      <CityWeather data={data} />
    </View>
    <View style={styles.body}>
      {stats.map(renderStat)}
    </View>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  body: {
    flex: 1,
  },
  statContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  statText: {
    fontSize: 18,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#909090',
  },
});

export default WeatherDetails;
