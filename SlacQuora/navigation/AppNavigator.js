import React from 'react';
import 'react-native-gesture-handler';
import SignIn from "../screens/authentication/SignIn";
import SignUp from "../screens/authentication/SingUp";
import RestorePassword from "../screens/authentication/RestorePassword"
import Home from "../screens/authentication/Home"
import Verification from "../screens/authentication/Verification"
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// function LogoTitle() {
//     return (
//         <Image
//             style={{ width: 50, height: 50 }}
//             source={require('../assets/images/Whiteboard.PNG')}
//         />
//     );
// }

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen name="RestorePassword" component={RestorePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

