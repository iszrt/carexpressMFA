import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './components/LoginScreen'
import DoctorLogin from './components/DoctorLogin'
import PatientLogin from './components/PaitentLogin'
//import DoctorDashboard from './components/DoctorDashboard' // Assume you have this    helooooo lalove

//import PatientDashboard from './components/PatientDashboard' // Assume you have this

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
        <Stack.Screen name="PatientLogin" component={PatientLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
