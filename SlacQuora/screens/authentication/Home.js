import React from 'react';
import { Icon } from 'react-native-elements'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
  } from "react-native";
import { ComicNeue_400Regular } from '@expo-google-fonts/dev';

function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>I AM A:{"\n\n\n"}</Text>
            <TouchableOpacity
                    style={styles.button} onPress={() => props.navigation.navigate('SignUp')}>
                <Icon
                    reverse
                    name='chalkboard-teacher'
                    type='font-awesome-5'
                    color='#FF9801'

                />
                <Text 
                    style={styles.bText}>
                        Professor
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={styles.button} onPress={() => props.navigation.navigate('SignUp')}>
                <Icon
                    reverse
                    name='user-graduate'
                    type='font-awesome-5'
                    color='#FF9801'
                />
                <Text 
                    style={styles.bText}>
                        Student
                </Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',
      alignItems: 'center'
    },

    homeText: {
        fontSize: 30,
        fontFamily: "ComicNeue_400Regular",
    },

    button: {
        alignItems: "center",
        width: 240,
        borderColor: "#FF9801",
        borderWidth: 1,
        borderRadius: 5, 
        backgroundColor: "#FF9801",
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 50,
        paddingBottom: 50,
        marginBottom: 20,
      },

      bText:{
        color: "#FFFFFF",
        fontSize: 25,
      },
});

export default Home;