import React, { Component } from 'react'
import {Image, View, StyleSheet } from 'react-native'
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';

export default class InterestingPlace extends Component {
    render() {
        const {navigation} = this.props  
        return (
            <View style={styles.container} >
                <HeaderBack title='Интересные места' navigation={navigation} />
                <View style={styles.imgWrap}>
                   <View style={styles.img}>
                       <Image style={styles.image} resizeMode='cover' source={require('../assets/img/place1.png')} />
                   </View>
                   <View style={styles.img}>
                        <Image style={styles.image} resizeMode='cover' source={require('../assets/img/place2.png')}  />
                   </View>
                </View>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container,
    imgWrap: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20
    },
    img: {
        width: 320,
        height: 200,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
})