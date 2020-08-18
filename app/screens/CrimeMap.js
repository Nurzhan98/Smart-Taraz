import React, { Component } from 'react'
import {Image, View, StyleSheet, Text, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button} from 'react-native-paper'


export default class CrimeMap extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Button transparent style={styles.backIcon} >
                    <Icon  name='keyboard-backspace' size={20} color='#fff' />
                </Button>
                <Text style={styles.titleText} >Карта преступности</Text>
                <View style={styles.imgContainer} >
                    <Image style={styles.img} source={require('../assets/img/map.png')} />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#09104C',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    titleText: {
        color: "#fff",
        marginTop: 30,
        fontWeight: "700",
        fontSize: 20
    },
    imgContainer:{
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 15
    },
    img: {
        width: '100%',
        height: '90%'
    },
    backIcon: {
        position: 'absolute',
        top: 10,
        right: 20
    }
})