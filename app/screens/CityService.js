import React, { Component } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';

export default class CityService extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack  title='Городские услуги' navigation={navigation} />
                <View style={styles.quantityService} >
                    <View style={styles.indexWrap} >
                        <View  style={styles.indexCount} >
                            <Text style={styles.indexTitle} >Всего</Text>
                            <Text style={styles.indexNumber, {color: '#FF654A'}}> 66 458 </Text>
                        </View>
                        <View  style={styles.indexCount} >
                            <Text style={styles.indexTitle} >Закрыта</Text>
                            <Text style={styles.indexNumber, {color: '#0DA22C'}}> 65 838 </Text>
                        </View>
                        <View  style={styles.indexCount} >
                            <Text style={styles.indexTitle} >В работе</Text>
                            <Text style={styles.indexNumber, {color: '#0361A7'}}> 176 </Text>
                        </View>
                        <View  style={styles.indexCount} >
                            <Text style={styles.indexTitle} >Просроч.</Text>
                            <Text style={styles.indexNumber, {color: '#B00100'}}> 488 </Text>
                        </View>
                    </View>
                    <View style={styles.topTenWrap} >
                        <View style={styles.topTen__titleWrap} >
                            <Text style={styles.topTen__title}>ТОП-10 ОТРАСЛЕВЫХ ОБРАЩЕНИЙ</Text>
                        </View>
                        <View style={styles.topTensWrap}>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >COVID-19</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '90%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >ЭЛЕКТРОСНАБЖЕНИЕ ГОРОДА</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '80%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >ОБЩЕСТВЕННОЕ РАЗВИТИЕ</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '70%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >ВОДОСНАБЖЕНИЕ ГОРОДА </Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '60%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >ДОРОЖНАЯ ИНФРАСТРУКТУРА</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '75%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >ЗАНЯТОСТЬ И СОЦИАЛЬНАЯ ЗАЩИТА </Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '85%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >ТЕПЛОСНАБЖЕНИЕ МЖД</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '55%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >УЛИЧНОЕ ОСВЕЩЕНИЕ</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '45%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >ОБЩЕСТВЕННЫЙ ТРАНСПОРТ</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '58%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.topTens}>
                                <View style={styles.topTensNameWrap} >
                                    <Text style={styles.topTensName} >КОЛОДЕЦ, ЛЮК</Text>
                                </View>
                                <View style={styles.topTensCounts}>
                                    <View style={{...styles.topTensCountWrap, width: '90%'}}>
                                        <Text style={styles.topTensCount}>32367</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({
    container,
    quantityService: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: 550,
        borderRadius: 10
    },
    indexWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 15,
        marginBottom: 15
    },
    indexCount: {
        backgroundColor: '#C4C4C4',
        width: 70,
        borderRadius: 5,
        alignItems: 'center',
        height: 60,
        justifyContent: 'space-around'
    },
    indexTitle: {
        color: '#000',
        fontWeight: '700'
    },
    indexNumber: {
        fontWeight: '700'
    },
    topTenWrap: {},
    topTen__titleWrap: {
        alignItems: 'center'
    },
    topTen__title: {
        fontWeight: '700'
    },
    topTens: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    topTensNameWrap: {
        width: '48%',
        alignItems: 'flex-end'
    },
    topTensName: {
        fontWeight: '700',
        fontSize: 8
    },
    topTensCounts: {
        width: "48%"
    },
    topTensCountWrap: {
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        backgroundColor: '#774181',
        borderRadius: 3
    },
    topTensCount: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14
    }
})