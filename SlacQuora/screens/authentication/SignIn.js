import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function SignIn(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign In Screen</Text>
            <Button
                title="Forget Password"
                onPress={() => props.navigation.navigate('RestorePassword')}
            />
            <Button
                title="SignIn"
                onPress={() => console.log("Signned In")}
            />
        </View>
    );
}

export default SignIn;