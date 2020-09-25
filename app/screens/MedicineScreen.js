import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import HeaderBack from '../components/HeaderBack';
import ListScreens from '../components/ListScreens';
import { container } from '../styles/styles';
 
export default class MedicineScreen extends Component {
    render() {
        const dataArray = [ 
            // { title: "ОСМС", content: "Lorem ipsum dolor sit amet", screen: 'CityService' },
            { title: "Льготная категория", content: "Lorem ipsum dolor sit amet", screen: 'MedCategory' },
            { title: "Мед организация", content: "Lorem ipsum dolor sit amet", screen: 'MedOrganization' },
        ];
        const {navigation} = this.props  
        // const {activeIndex} = this.state
        return ( 
            <View style={styles.container} >
                <HeaderBack title='Медицина' navigation={navigation} />
                <ListScreens data={dataArray} navigation={navigation} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container
})