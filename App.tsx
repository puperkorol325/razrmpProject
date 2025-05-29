import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './Screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen } from './Screens/SignupScreen/SignupScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
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
          </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;
