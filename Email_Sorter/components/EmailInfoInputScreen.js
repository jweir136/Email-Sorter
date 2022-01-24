import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default EmailSelectionScreen = ({ route, navigation }) => {
    const imap = route.params['host'];
    const name = route.params['name'];

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    return (
        <KeyboardAvoidingView style={ styles.mainView }>
            <View style={ styles.inputView }>
                <Text style={ styles.title }>Login to { name }</Text>

                <Text></Text>
                <Text></Text>
                <Text></Text>

                <TextInput
                    placeholder="Email"
                    style={ styles.textInput }
                    placeholderTextColor={ "grey" }
                    onChangeText={ (input) => setEmailInput(input) }
                />

                <Text></Text>

                <TextInput
                    placeholder="Password"
                    style={ styles.textInput }
                    placeholderTextColor={ "grey" }
                    secureTextEntry={true}
                    onChangeText={ (input) => setPasswordInput(input) }                
                />

                <Text></Text>

                <Text></Text>

                <Text></Text>
            
                <TouchableOpacity style={ styles.buttonTouch } onPress={ () => console.log(emailInput, passwordInput) }>
                <View style={ styles.button }>
                    <Text style={ styles.buttonText }>Login</Text>
                </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
    },
    inputView: {
        flex: 0.65,
        width: "75%",
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textInput: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        width: "100%",
        padding: '5%',
        borderRadius: 10
    },
    buttonTouch: {
        width: "100%"
    },
    button: {
        width: '100%',
        backgroundColor: 'lightblue',
        padding: '5%',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold'
    }
});