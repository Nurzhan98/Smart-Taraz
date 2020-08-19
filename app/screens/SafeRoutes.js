import React, { Component } from 'react'
import {Image, View, StyleSheet } from 'react-native'
import { container } from '../Styles';
import HeaderBack from '../components/HeaderBack';

export default class SafeRoutes extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack title='Безопасные маршруты город' navigation={navigation} />
                <View style={styles.imgContainer} >
                    <Image  resizeMode='contain' style={styles.img} source={require('../assets/img/image18.png')} />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container,
    imgContainer:{
        width: '100%',
        marginTop: 15
    },
    img: {
        width: '100%',
        height: '90%'
    },
    backIcon: {
    },
    iconContainer: {
        alignSelf: 'flex-end',
    }
})