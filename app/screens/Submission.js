import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Textarea } from 'native-base';
import { Button} from 'react-native-paper'
import HeaderBack from '../components/HeaderBack';
import { container } from '../Styles';

export default class Submission extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack title='Подача обращений' navigation={navigation} />
                <Text style={styles.text}> Текст обращения (минимум 10 символов) </Text>
                <Textarea placeholder='Введите текст образения и нажмите “Отправить обращение”' style={styles.textArea}  />
                <Textarea placeholder='Адрес' style={styles.textAreaSmall}  />
                <View style={styles.btnAttach}>
                    <Button title='Прикрепить файл' color='#0DA22C' />
                </View>
                <View style={styles.btn}>
                    <Button  title='Отправить обращение' color='#09104C' />
                </View>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({ 
    container,
    textArea: {
        width: '100%',
        backgroundColor: '#fff',
        height: 140,
        borderRadius: 7,
        marginTop: 10
    },
    text: {
        color: '#fff',
        marginTop: 10,
        fontSize: 15,
        fontWeight: '700'
    },
    textAreaSmall: {
        width: '100%',
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 7,
        marginTop: 30
    },
    btn: {
        width: 250,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    btnAttach: {
        width: 250,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15
    }
})