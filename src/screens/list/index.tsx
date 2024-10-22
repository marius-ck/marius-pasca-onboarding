import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useQuery } from '@tanstack/react-query';

const API_KEY = 'YOUR_API_KEY'; // Replace this with your OpenWeatherMap API Key

// const fetchCitiesWeather = async () => {
//   // List of cities by name or city IDs
//   const cityIds = ['5128581', '2643743', '2968815']; // New York, London, Paris
//   const cityPromises = cityIds.map(cityId =>
//     fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//   );
//   const results = await Promise.all(cityPromises);
//   return results.map(response => response.data); // Return only the data
// };

const WeatherList = ({ navigation }) => {
  return <View style={styles.backgroud}>
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <Text>HELLO</Text>
    </TouchableOpacity>
  </View>
  // const { data, error, isLoading, refetch } = useQuery({ queryKey: ['citiesWeather'], queryFn: fetchCitiesWeather });

  // if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  // if (error) return <Text>Error fetching data...</Text>;

  // return (
  //   <FlatList
  //     data={data}
  //     keyExtractor={(item) => item.id.toString()}
  //     renderItem={({ item }) => (
  //       <View style={styles.cityContainer}>
  //         <Text style={styles.cityName}>{item.name}</Text>
  //         <Text style={styles.cityWeather}>
  //           {item.weather[0].description}, Temp: {Math.round(item.main.temp - 273.15)}°C
  //         </Text>
  //       </View>
  //     )}
  //     onRefresh={refetch}
  //     refreshing={isLoading}
  //   />
  // );
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

export default WeatherList;
