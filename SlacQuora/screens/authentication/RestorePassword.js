import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function RestorePassword(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Restore Password Screen</Text>
            <Button
                title="Send Instructions"
                onPress={() => console.log("Send Instructions")}
            />
        </View>
    );
}

export default RestorePassword;