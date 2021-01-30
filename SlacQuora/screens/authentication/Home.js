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

function Home(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.homeText}>Home Screen</Text>
            <TouchableOpacity
                    style={styles.button}>
                <Icon
                    reverse
                    name='account-tie'
                    type='material-community'
                    color='#FF9801'
                />
                <Text 
                    style={styles.bText}>
                        Professors
                </Text>
            </TouchableOpacity>
            
            <Button
                title="Professor "
                onPress={() => props.navigation.navigate('SignUp')}
            />
            <Button
                title="Student "
                onPress={() => props.navigation.navigate('SignUp')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    homeText: {

    },

    button: {
        alignItems: "center",
        borderColor: "#FF9801",
        borderWidth: 1,
        borderRadius: 5, 
        backgroundColor: "#FFFFF",
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 50,
        paddingBottom: 50,
        marginBottom: 20,
      },
});

export default Home;