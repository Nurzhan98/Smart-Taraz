import React, { Component } from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

export default class Loader extends Component {
    render() {
        return (
            <View style={styles.loader} >
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C9CD8',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})