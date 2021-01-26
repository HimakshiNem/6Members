import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Verification(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Verification Screen</Text>
            <Button
                title="Create Student Account"
                onPress={() => props.navigation.navigate('SignIn')}
            />
        </View>
    );
}

export default Verification;