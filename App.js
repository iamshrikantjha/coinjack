import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/router';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  return (
    <View style={{
      flex: 1,                                                          
    }}>

      {/* <GameScreen /> */}
      <Router />

      <StatusBar style="auto" />

      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
