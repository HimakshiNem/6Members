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

function Verification(props) {


    return (
        <View style={styles.container}>
            <Text style={styles.title}> Verification - Students </Text>

            <View style={styles.form}>
                <TouchableOpacity
                    style={styles.button}>
                    <Icon
                    reverse
                    name='image-outline'
                    type='ionicon'
                    color='#FF9801'
                    />
                    <Text 
                    style={styles.bText}>
                        Upload Front of Student ID
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}>
                    <Icon
                    reverse
                    name='image-outline'
                    type='ionicon'
                    color='#FF9801'
                    />
                    <Text 
                    style={styles.bText}>
                        Upload Back of Student ID
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider}>

            </View>

            {/*Following view is for the verification button*/}
            <View style={styles.verificationBtnView}>
                <TouchableOpacity
                style={styles.verificationBtnContainer}
                onPress={() => props.navigation.navigate("Verification")}>
                <Text style={styles.verificationBtnText}> Create Student Account </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    title: {
        marginLeft: 17,
        marginTop: 17,
        fontSize: 30,
        fontWeight: "bold",
      },

      form: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
      },

      verificationBtnView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
      },
    
      verificationBtnContainer: {
        width: "70%",
        borderRadius: 5,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
        marginBottom: "10%",
        backgroundColor: "#00A0FF",
      },

      verificationBtnText: {
        fontSize: 14,
        color: "#FFFFFF"
      },

      button: {
        alignItems: "center",
        borderColor: "#FF9801",
        borderWidth: 1,
        borderRadius: 5, 
        backgroundColor: "#FFFFF",
        paddingRight: 130,
        paddingLeft: 130,
        paddingTop: 80,
        paddingBottom: 80,
        marginBottom: 20,
      },

      bText: {
        color: "#c7c7c7",
      },
});

export default Verification;