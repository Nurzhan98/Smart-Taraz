import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';

export default class MedOrganization extends Component {
    render() {
        const {navigation} = this.props 
        return (
            <View style={styles.container} >
                <HeaderBack title='Мед организация' navigation={navigation} />
                {/* <ScrollView>
                    <View style={styles.imgWrap}>
                    <View style={styles.img}>
                        <Image style={styles.image} resizeMode='stretch' source={require('../assets/img/institution1.png')} />
                    </View>
                    <View style={styles.img}>
                            <Image style={styles.image} resizeMode='stretch' source={require('../assets/img/institution2.png')}  />
                    </View>
                    </View>
                </ScrollView> */}
                    <View style={styles.imgWrap}>
                        <Image style={styles.image} resizeMode='stretch' source={require('../assets/img/med.jpg')}  />
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
        marginTop: 20,
        height: 500,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})