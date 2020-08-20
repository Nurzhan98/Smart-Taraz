import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';

export default class Institution extends Component {
    render() {
        const {navigation} = this.props 
        return (
            <View style={styles.container} >
                <HeaderBack title='Заведения' navigation={navigation} />
                <ScrollView>
                    <View style={styles.imgWrap}>
                    <View style={styles.img}>
                        <Image style={styles.image} resizeMode='stretch' source={require('../assets/img/institution1.png')} />
                    </View>
                    <View style={styles.img}>
                            <Image style={styles.image} resizeMode='stretch' source={require('../assets/img/institution2.png')}  />
                    </View>
                    </View>
                </ScrollView>
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
        width: 350,
        height: 400,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
})