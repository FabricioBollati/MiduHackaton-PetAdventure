import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoryScreen} from '../screens/StoryScreen';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#c5bfe3',
        },

        // cardStyle: {
        //   backgroundColor: 'white',
        // },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
};
