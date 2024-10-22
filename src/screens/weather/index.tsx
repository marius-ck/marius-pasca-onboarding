import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image, ListRenderItem } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

import { useGetWeather } from '../../api/weather';
import { WeatherData } from '../../api/weather/types';
import CityListItem from './City';

type Props = NativeStackScreenProps<RootStackParamList, 'Weather'>;

const WeatherList: React.FC<Props> = ({ navigation }) => {
  const { data, fetchNextPage, isLoading, error, refetch } = useGetWeather();

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error fetching data...</Text>;

  const renderItem: ListRenderItem<WeatherData> = ({ item }) => {
    const navigateToDetails = () => {
      navigation.navigate('Details', { city: item });
    }

    return <CityListItem data={item} navigateToDetails={navigateToDetails} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.pages.flat()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onRefresh={refetch}
        onEndReached={fetchNextPage}
        refreshing={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeatherList;
