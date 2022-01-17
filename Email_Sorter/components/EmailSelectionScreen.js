import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Link from './Link';

export default EmailSelectionScreen = ({ navigation }) => {
    return (
        <View style={ styles.mainContainer }>

            <View style={ styles.container }>
                <Text style={ styles.containerText }>GMail</Text>
            </View>
            <View style={ styles.container }>
                <Text style={ styles.containerText }>Outlook</Text>
            </View>
            <View style={ styles.container }>
                <Text style={ styles.containerText }>Yahoo Mail</Text>
            </View>
            <View style={ styles.container }>
                <Text style={ styles.containerText }>Hotmail</Text>
            </View>
            <View style={ styles.container }>
                <Text style={ styles.containerText }>Aol</Text>
            </View>
            <View style={ styles.container }>
                <Text style={ styles.containerText }>Other</Text>
            </View>

            <Text style={ styles.smallText }>or <Link text="create a new account"/></Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
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
});