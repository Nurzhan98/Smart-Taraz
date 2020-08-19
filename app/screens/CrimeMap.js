import React, { Component } from 'react'
import {Image, View, StyleSheet} from 'react-native'
import { container } from '../Styles';
import HeaderBack from '../components/HeaderBack';

export default class CrimeMap extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack title='Карта преступности' navigation={navigation} />
                <View style={styles.imgContainer} >
                    <Image style={styles.img} source={require('../assets/img/map.png')} />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container,
    titleWrap:{
        backgroundColor: '#fff',
        marginTop: 30,
        width: '100%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    titleText: {
        color: "#000",
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
    },
    iconContainer: {
        alignSelf: 'flex-end',
    }
})