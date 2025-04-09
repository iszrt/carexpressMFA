import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

const LoginScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false)

  const handleDoctorLogin = () => {
    setLoading(true)
    // Example of navigating to doctor login
    setTimeout(() => {
      setLoading(false)
      navigation.navigate('DoctorLogin') // Navigate to the Doctor's login screen
    }, 1000)
  }

  const handlePatientLogin = () => {
    setLoading(true)
    // Example of navigating to patient login
    setTimeout(() => {
      setLoading(false)
      navigation.navigate('PatientLogin') // Navigate to the Patient's login screen
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CareXpress Login</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Loading...' : 'Login as Doctor'}
          onPress={handleDoctorLogin}
          disabled={loading}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Loading...' : 'Login as Patient'}
          onPress={handlePatientLogin}
          disabled={loading}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
})

export default LoginScreen
