import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sign Up - Students </Text>

      {/*Following view is for the sign in form*/}
      <View style={styles.form}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#BFBFBF"
            onChangeText={(username) => setUsername(username)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#BFBFBF"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#BFBFBF"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
          <Text style={styles.signInBtn}> Sign In Here</Text>
        </TouchableOpacity>
      </View>

      {/*Following view is for the verification button*/}
      <View style={styles.verificationBtnView}>
        <TouchableOpacity
          style={styles.verificationBtnContainer}
          onPress={() => props.navigation.navigate("Verification")}
        >
          <Text style={styles.verificationBtnText}> Proceed with Verification </Text>
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

  signInBtn: {
    marginTop: 10,
    color: "#4676B4",
    fontSize: 14,
  },

  verificationBtnView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 220,
  },

  verificationBtnContainer: {
    width: "70%",
    borderRadius: 5,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00A0FF",
  },
  verificationBtnText: {
    fontSize: 14,
    color: "#FFFFFF"
  },
});

export default SignUp;
