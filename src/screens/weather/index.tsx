import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ListRenderItem } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useGroupWeather } from '../../api/weather';
import { WeatherData } from '../../api/weather/types';
import WeatherListItem from './WeatherListItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Weather'>;

const WeatherList: React.FC<Props> = ({ navigation }) => {
  const { data, isLoading, error, refetch } = useGroupWeather();

  if (isLoading) return <View style={styles.placeholder}>
    <ActivityIndicator size="large" color="#f9794e" />
  </View>;

  if (error) return <View style={styles.placeholder}>
    <Text style={styles.text}>Error fetching data.</Text>
  </View>;

  const renderItem: ListRenderItem<WeatherData> = ({ item }) => {
    const navigateToDetails = () => {
      navigation.navigate('Details', { data: item });
    }

    return <WeatherListItem data={item} navigateToDetails={navigateToDetails} />
  };

  const emptyComponent = () => <View style={styles.placeholder}>
    <Text style={styles.text}>There is no data available.</Text>
  </View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onRefresh={refetch}
        ListEmptyComponent={emptyComponent}
        refreshing={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#909090',
  }
});

export default WeatherList;
