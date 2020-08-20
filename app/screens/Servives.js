import React, { Component} from 'react'
import {View, StyleSheet } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import ListScreens from '../components/ListScreens';
import { container } from '../styles/styles';
 
export default class Services extends Component {
    render() {
        const dataArray = [ 
            { title: "Городские услуги", content: "Lorem ipsum dolor sit amet", screen: 'CityService' },
            { title: "Новости", content: "Lorem ipsum dolor sit amet", screen: 'News' },
            { title: "Общественный транспорт", content: "Lorem ipsum dolor sit amet", screen: 'PublicTransport' },
            { title: "Подача обращений", content: "Lorem ipsum dolor sit amet", screen: 'Submission' },
            { title: "Досуг", content: "Lorem ipsum dolor sit amet", screen: 'DosugStack' },
            { title: "Медицина", content: "Lorem ipsum dolor sit amet", screen: 'MedicineStack' },
            // { title: "Образование", content: "Lorem ipsum dolor sit amet" },
            // { title: "Активный житель", content: "Lorem ipsum dolor sit amet" },
            // { title: "COVID 2020", content: "Lorem ipsum dolor sit amet" },
        ];   
        const {navigation} = this.props  
        return ( 
            <View style={styles.container} >
                <HeaderTitle title='Услуги' />
                <ListScreens data={dataArray} navigation={navigation} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container
})