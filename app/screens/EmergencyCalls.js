import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { container } from '../Styles';
import HeaderBack from '../components/HeaderBack';

export default class EmergencyCalls extends Component {
    render() {
        const { navigation }= this.props
        return (
            <View style={styles.container} >
                <HeaderBack title='Экстренные вызовы' navigation={navigation} />
                <View style={styles.lists} >
                    <View style={styles.listWrap}>
                        <Text style={styles.listText} > 
                            1406 
                         </Text>
                        <Text style={styles.listText}>
                            Call-центр ФОМС
                        </Text>
                    </View>
                    <View style={styles.listWrap}>
                        <Text style={styles.listText} > 
                            112    
                         </Text>
                        <Text style={styles.listText}>
                            Служба газа
                        </Text>
                    </View>
                    <View style={styles.listWrap}>
                        <Text style={styles.listText} > 
                            103
                         </Text>
                        <Text style={styles.listText}>
                            Скорая помощь
                        </Text>
                    </View>
                    <View style={styles.listWrap}>
                        <Text style={styles.listText} > 
                            102
                         </Text>
                        <Text style={styles.listText}>
                            Полиция
                        </Text>
                    </View>
                    <View style={styles.listWrap}>
                        <Text style={styles.listText} > 
                            101
                         </Text>
                        <Text style={styles.listText}>
                            Пожарная часть 
                        </Text>
                    </View>
                    <View style={styles.listWrap}>
                        <Text style={styles.listText} > 
                            109
                         </Text>
                        <Text style={styles.listText}>
                            Единый контакт-центр Aikey акимата г.Тараза
                        </Text>
                    </View>
                    <View style={styles.listWrap}>
                        <Text style={styles.listText} > 
                            119
                         </Text>
                            <Text style={styles.listText}>
                           Горячая линия по вопросам ЧП
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container,
    lists: {
        marginTop: 15
    },
    listWrap: {
        flexDirection: 'row'
    },
    listText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 15
    }
})