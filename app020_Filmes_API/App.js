import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './src/pages/Home';
import Sinopse from './src/pages/Sinopse';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes" component={Home} />
        <Stack.Screen name="Sinopse" component={Sinopse} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}