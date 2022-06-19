import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import GameScreen from '../screens/GameScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PlayAgainScreen from '../screens/PlayAgainScreen';



const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="GameScreen" component={GameScreen} />
                <Stack.Screen name="PlayAgainScreen" component={PlayAgainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}