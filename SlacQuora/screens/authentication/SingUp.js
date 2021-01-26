import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function SignUp(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SignUp Screen</Text>
      <Button
        title="Sign In here"
        onPress={() => props.navigation.navigate('SignIn')}
      />
      <Button
        title="Proceed to Verification"
        onPress={() => props.navigation.navigate('Verification')}
      />
    </View>
  );
}

export default SignUp; 