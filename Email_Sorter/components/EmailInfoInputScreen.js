import * as React from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default EmailSelectionScreen = ({ route, navigation }) => {
    const imap = route.params['host'];
    const name = route.params['name'];

    return (
       <View><Text>{ name }</Text></View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 0.10,
        justifyContent: 'center',
    },
    containerText: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold'
    },
    smallText: {
        paddingTop: '5%',
        textAlign: 'center',
        fontSize: 16
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '5%'
    }
});