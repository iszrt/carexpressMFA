import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'

const PatientLogin = ({ navigation }: any) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    if (username === 'patient' && password === 'password') {
      // Example credentials validation
      setLoading(false)
      navigation.navigate('PatientDashboard') // Redirect to patient's dashboard after login
    } else {
      setLoading(false)
      Alert.alert('Invalid Credentials', 'Please check your username and password')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={loading ? 'Logging in...' : 'Login'}
        onPress={handleLogin}
        disabled={loading}
      />
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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
})

export default PatientLogin
