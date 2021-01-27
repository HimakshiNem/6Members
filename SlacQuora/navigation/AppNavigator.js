import React from 'react';
import 'react-native-gesture-handler';
import SignIn from "../screens/authentication/SignIn";
import SignUp from "../screens/authentication/SignUp";
import RestorePassword from "../screens/authentication/RestorePassword"
import Home from "../screens/authentication/Home"
import Verification from "../screens/authentication/Verification"
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JustMeAgainDownHere_400Regular } from '@expo-google-fonts/just-me-again-down-here';

const Stack = createStackNavigator();

function LogoTitle() {
    return (
        <View style={styles.container}>
            <Text style={styles.HeaderTitle}>Whiteboard</Text>
        </View>
    );
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                  screenOptions={{
                    headerTitle: props => <LogoTitle {...props} />
                  }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen name="RestorePassword" component={RestorePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    HeaderTitle: {
      fontFamily: "JustMeAgainDownHere_400Regular",
      fontSize: 30,
      lineHeight:45,
      color: "#FF9801",
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });

export default AppNavigator;

