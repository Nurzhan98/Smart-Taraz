import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { container } from '../Styles';

export default class Addresses extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.titleText} >Addresses</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container
})