import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen } from './Screens/SignupScreen/SignupScreen'
import { HomeScreen } from './Screens/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HistoryScreen } from './Screens/History/History';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen 
                name="Signup" 
                component={SignupScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="History"
                component={HistoryScreen}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  );
}

export default App;
