import React, { Component } from 'react'
import {Image, View, StyleSheet, Text, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { container } from '../styles/styles';
import HeaderBack from '../components/HeaderBack';

Icon.loadFont()
export default class SafeSchools extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack title='Безопасные школы' navigation={navigation} />
                <View style={styles.schoolsContainer} >
                    <View style={styles.school} >
                        <View style={styles.schoolNameWrap} >
                            <Text style={styles.schoolName} > Школа-гимназия № 15 </Text>
                        </View>
                        <View style={styles.schoolImgWrap}>
                            <Image resizeMode='contain' style={styles.schoolImg} source={require('../assets/img/school1.png')} />
                        </View>
                        <View style={styles.starsWrap} >
                            <Icon name='star' size={18} color='#bf9e0f' />
                            <Icon name='star' size={18} color='#bf9e0f' />
                            <Icon name='star' size={18} color='#bf9e0f' />
                            <Icon name='star' size={18} color='#bf9e0f' />
                            <Icon name='star' size={18} color='#bf9e0f' />
                        </View>
                    </View>
                    <View style={styles.school} >
                        <View style={styles.schoolNameWrap} >
                            <Text style={styles.schoolName} > Школа № 51 </Text>
                        </View>
                        <View style={styles.schoolImgWrap}>
                            <Image resizeMode='contain' style={styles.schoolImg} source={require('../assets/img/school2.png')} />
                        </View>
                        <View style={styles.starsWrap} >
                            <Icon name='star' size={18} color='#bf9e0f' />
                            <Icon name='star' size={18} color='#bf9e0f' />
                            <Icon name='star' size={18} color='#bf9e0f' />
                            <Icon name='star' size={18} color='#9ca4b0' />
                            <Icon name='star' size={18} color='#9ca4b0' />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container,
    schoolsContainer:{
        marginTop: 20
    },
    school: {
        marginBottom: 10
    },
    schoolNameWrap: {
    
    },
    schoolName: {
        color: '#fff',
        fontSize: 20
    },
    schoolImgWrap: {
        width: 150,
        height: 150,
        alignSelf:'center'
    },
    schoolImg:{
        width: '100%',
        height: '100%'
    },
    starsWrap: {
        alignSelf: 'center',
        width: 100,
        backgroundColor: '#fff',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})