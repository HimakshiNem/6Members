import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Home(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
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

export default Home;