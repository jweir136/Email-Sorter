import * as React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import Link from './Link';

export default EmailSelectionScreen = ({ navigation }) => {
    return (
        <View style={ styles.mainContainer }>

            <TouchableHighlight
                style={ styles.container }
                onPress={ () => navigation.navigate("Email Info Input", {"host":"imap.gmail.com", "name":"Gmail"}) } 
                activeOpacity={0.6}   
                underlayColor="#DDDDDD">
                    <Image source={ require("Email_Sorter/assets/newgmaillogo.jpg") } style={ styles.image }/>
            </TouchableHighlight>
            <TouchableHighlight
                style={ styles.container }
                onPress={ () => navigation.navigate("Email Info Input", {"host":"outlook.office365.com", "name":"Outlook"}) }  
                activeOpacity={0.6}   
                underlayColor="#DDDDDD">                
                <Text style={ styles.containerText }>Outlook</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={ styles.container }
                onPress={ () => navigation.navigate("Email Info Input", {"host":"imap.mail.yahoo.com", "name":"Yahoo Mail"}) } 
                activeOpacity={0.6}   
                underlayColor="#DDDDDD">                
                <Text style={ styles.containerText }>Yahoo Mail</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={ styles.container }
                onPress={ () => navigation.navigate("Email Info Input", {"host":"outlook.office365.com", "name":"Hotmail"}) }  
                activeOpacity={0.6}   
                underlayColor="#DDDDDD">                
                <Text style={ styles.containerText }>Hotmail</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={ styles.container }
                onPress={ () => navigation.navigate("Email Info Input", {"host":"smtp.aol.com", "name":"Aol"}) } 
                activeOpacity={0.6}   
                underlayColor="#DDDDDD">                
                <Text style={ styles.containerText }>Aol</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={ styles.container }
                onPress={ () => navigation.navigate("Email Info Input", {"host":null, "name":null}) } 
                activeOpacity={0.6}   
                underlayColor="#DDDDDD">                
                <Text style={ styles.containerText }>Other</Text>
            </TouchableHighlight>

            <Text style={ styles.smallText }>or <Link text="create a new account"/></Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
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
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    }
});