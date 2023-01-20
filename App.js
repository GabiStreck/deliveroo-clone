import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import CreateOrderScreen from './screens/CreateOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <TailwindProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ headerShown: false }} />

            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateOrder"
                component={CreateOrderScreen}
                options={{ headerShown: false }}
              />
            </Stack.Group>

          </Stack.Navigator>
        </TailwindProvider>
      </ReduxProvider>
    </NavigationContainer >
  );
}