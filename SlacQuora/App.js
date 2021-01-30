import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from  "./navigation/AppNavigator"
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ComicNeue_400Regular,
  JustMeAgainDownHere_400Regular,
} from '@expo-google-fonts/dev';





// const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    ComicNeue_400Regular,
    JustMeAgainDownHere_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppNavigator/>
  );
}
