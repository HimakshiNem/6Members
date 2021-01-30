import React from 'react';
import { StyleSheet, Text, View, Button,TextInput, TouchableOpacity } from 'react-native';

function RestorePassword(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Restore Password </Text>
            <View style={styles.form}>
                <Text style={styles.TextInstructions}>We will send instructions on how to update your password for your email address</Text>
                <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Username"
                placeholderTextColor="#BFBFBF"
                onChangeText={(emailUserName) => setUsername(emailUserName)}
                />
                </View>
                <View style={styles.restorePwBtnView}>
                <TouchableOpacity
                style={styles.restorePwBtnContainer}
                onPress={() => props.navigation.navigate("Home")}
                >
                <Text style={styles.restorePwBtnText}> Send Instruction </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
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

    inputView: {
        borderColor: "#FF9801",
        borderWidth: 1,
        borderRadius: 5,
        width: "90%",
        height: 38,
        marginBottom: 20,
      },

    TextInput: {
        height: 50,
        flex: 1,
        marginLeft: 14,
    },
    restorePwBtnView: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        width: "40%",
      },
    restorePwBtnContainer: {
        width: "70%",
        borderRadius: 5,
        height: 38,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#00A0FF",
    },
    restorePwBtnText: {
        fontSize: 14,
        color: "#FFFFFF"
    },
    TextInstructions: {
        //width:"90%",S
        paddingBottom : 10,
        marginLeft: 14,
        color: "#D3D3D3"
    }
});

export default RestorePassword;