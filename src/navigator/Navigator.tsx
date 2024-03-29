import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../components/Animation101Screen';
import { Animation102Screen } from '../components/Animation102Screen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
     screenOptions={{
        headerShown: false
     }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
    </Stack.Navigator>
  );
}