import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TextInput} from 'react-native'
import {Button} from 'native-base'
import { container } from '../styles/styles';

export default class AuthScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View  style={styles.titleWrap} >
                    <Text  style={styles.title}>TARAZ CITY</Text>
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} placeholder='Фамилия' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} placeholder='Имя' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} placeholder='777 777 77 77' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} placeholder='Пароль' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} placeholder='Повторите пароль' />
                </View>
                <View style={styles.btnWrap}>
                    <Button style={styles.btn}>
                        <Text style={styles.btnText}>Регистрация</Text>
                    </Button>
                </View>
                <View  style={styles.footerWrap}>
                    <Text  style={styles.footerText}>Служба технической поддержки</Text>
                    <Text  style={styles.footerText}>8 (777)-777-77-77</Text>
                </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container,
    titleWrap:{
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 40
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 25
    },
    footerWrap:{
        alignItems: 'center',
        marginTop: 60
    },
    footerText:{
        color: '#fff'
    },
    inputsWrap:{
        backgroundColor: '#fff',
        marginTop: 20,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },
    inputs: {
        paddingHorizontal: 10,
    },
    btn: {
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A1150',
        height: 40
    },
    btnWrap: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
});