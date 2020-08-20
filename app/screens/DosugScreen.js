import React, { Component} from 'react'
import { View, StyleSheet} from 'react-native'
import HeaderBack from '../components/HeaderBack';
import ListScreens from '../components/ListScreens';
import { container } from '../styles/styles';
 
export default class DosugService extends Component {
    render() {
        const dataArray = [ 
            { title: "Интересные места", content: "Lorem ipsum dolor sit amet", screen: 'InterestingPlace' },
            { title: "Заведения", content: "Lorem ipsum dolor sit amet", screen: 'Institution' },
        ];
        const {navigation} = this.props  
        return ( 
            <View style={styles.container} >
                <HeaderBack title='Досуг' navigation={navigation} />
                <ListScreens data={dataArray} navigation={navigation} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container
})