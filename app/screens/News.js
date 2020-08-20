import React, { Component } from 'react'
import {View, StyleSheet, Text } from 'react-native'
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';


export default class News extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack title='Новости' navigation={navigation} />
                <View style={styles.newsWrap}>
                    <Text style={styles.newsTitle}>
                        КОРОНАВИРУС
                    </Text>
                    <Text style={styles.newSubTitle}>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        Что делать, если на работе у сотрудника обнаружили КВИ?
                    </Text>
                    <Text style={styles.newsContent}>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    Нужно позвонить в Кккбту по региону и сообщить о данном случае. Далее они сами подключаются и выявляют 3 степени контактных: близких, не очень близко контактировали и просто находились в одном здании. Если близко контактировали, то дают направление сдать тест. А кто не близко, те за свой счёт сдают тест на КВИ по желанию. 
                    </Text>
                    <Text style={styles.newsFooter}>
                        20 июля 2020 г., 17:40
                    </Text>
                </View>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container,
    newsWrap: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: 550,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    newsTitle: {
        alignSelf: 'center',
        fontWeight: '700'
    },
    newSubTitle: {
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 10
    },
    newsContent: {
        textAlign: 'justify',
        marginTop: 10
    },
    newsFooter: {
        marginTop: 50
    }
})