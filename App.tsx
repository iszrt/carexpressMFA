Import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen'; // Regular login screen
import DoctorLogin from './components/DoctorLogin'; // Doctor login screen
import PatientLogin from './components/PatientLogin'; // Patient login screen
import SignUp from './components/SignUp'; // Sign-up screen where users choose between doctor or patient

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="PatientLogin" component={PatientLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//Via Nicole Preciado