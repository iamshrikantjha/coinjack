import { View, Text, Button } from 'react-native'
import React from 'react'

const PlayAgainScreen = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
    }}>
      <Text>You can beat the AI, please try again</Text>
      <Button title='Play Again' onPress={() => navigation.replace('GameScreen')} />
    </View>
  )
}

export default PlayAgainScreen