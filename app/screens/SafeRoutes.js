import React, { Component } from 'react'
import {Image, View, StyleSheet, Text, TextInput, Button} from 'react-native'


export default class SafeRoutes extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.titleText} >SafeRoutes</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#09104C',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
})