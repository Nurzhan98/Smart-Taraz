import React, { Component } from 'react'
import {View, StyleSheet, Text } from 'react-native'
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';

export default class PublicTransport extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack title='Общественный транспорт' navigation={navigation} />
                <View style={styles.transportsWrap}>
                    <Text style={styles.transportTime}>
                        20 июля 2020 г., 17:40
                    </Text>
                    <Text style={styles.transportTitle} >Выход автобусов на линию</Text>
                    <View style={styles.countsWrap} >
                        <View style={styles.count} >
                            <Text style={styles.countText} >№ Автопарк</Text>
                            <Text style={styles.countText}>47</Text>
                            <Text style={styles.countText}>47</Text>
                            <Text style={styles.countText}>25</Text>
                            <Text style={styles.countText}>25</Text>
                        </View>
                        <View style={styles.count}>
                            <Text style={styles.countText}>Маршруты</Text>
                            <Text style={styles.countText}>25</Text>
                            <Text style={styles.countText}>47</Text>
                            <Text style={styles.countText}>36</Text>
                            <Text style={styles.countText}>36</Text>
                        </View>
                        <View style={styles.count}>
                            <Text style={styles.countText}>Количество</Text>
                            <Text style={styles.countText}>47</Text>
                            <Text style={styles.countText}>14</Text>
                            <Text style={styles.countText}>58</Text>
                            <Text style={styles.countText}>58</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container,
    transportsWrap: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: 550,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    transportTime: {},
    transportTitle: {
        marginTop: 10,
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 20
    },
    countsWrap: {
        flexDirection: 'row',
        width: '100%'
    },
    count: {
        flex: 1,
        alignItems: 'center'
    },
    countText: {
        marginTop: 10,
        fontWeight: '700',
        fontSize: 15
    }
})