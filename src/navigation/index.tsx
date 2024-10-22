import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherList from '../screens/list';
import WeatherDetails from '../screens/details';
import { StyleSheet } from 'react-native';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerStyle: rootStyles.header }}>
      <Stack.Screen name="Home" component={WeatherList} />
      <Stack.Screen name="Details" component={WeatherDetails} />
    </Stack.Navigator>
  );
}


const rootStyles = StyleSheet.create({
  header: {

  },
});