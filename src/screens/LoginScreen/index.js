import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('Data ', username, password);
        if (username == '' || password == '') {
            Alert.alert('Please enter data')
        }
        else{
            if (username != 'admin' || password != 'admin1234') {
                Alert.alert('Incorrect credentials')
            }
            else {
                navigation.navigate('GameScreen')
            }
        }
    }
    
  return (
    <View>
      <TextInput 
      placeholder='username'
      value={username}
      onChange={(value) => {setUsername(value.nativeEvent.text)}}
      style={{
        borderWidth: 1,
        height: 50,
      }} />
      <TextInput
      placeholder='password'
      value={password}
      onChange={(value) => {setPassword(value.nativeEvent.text)}}
      style={{
        borderWidth: 1,
        height: 50,
      }} />
      <Button onPress={() => handleSubmit()} title='Login' />
    </View>
  )
}

export default LoginScreen