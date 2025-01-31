import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { InicioScreens } from './src/screens/InicioScreens';
//import { RegistroScreen } from './src/screens/Registro';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
