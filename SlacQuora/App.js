import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from  "./navigation/AppNavigator"
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JustMeAgainDownHere_400Regular,
} from '@expo-google-fonts/just-me-again-down-here';





// const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    JustMeAgainDownHere_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppNavigator/>
  );
}
