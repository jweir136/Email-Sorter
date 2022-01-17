import * as React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

export default Link = ({ text }) => {
    return (
        <Text style={{color: 'blue'}}>
            { text }
        </Text>
    );
}