import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import ListScreens from '../components/ListScreens';
import { container } from '../styles/styles';
import { observer } from 'mobx-react' 
import { observable } from 'mobx'



@observer export default class ServicesCityScreen extends Component {
    render() {
        const secureCity = [
            {title: 'Карта преступности', screen: 'CrimeMap'},
            {title: 'Безопасные маршруты', screen: 'SafeRoutes'},  
            {title: 'Безопасные школы', screen: 'SafeSchools'}, 
            {title: 'Экстренные вызовы', screen: 'EmergencyCalls'},
        ]
        const {navigation} = this.props
        return ( 
            <View style={styles.container} >
                <ScrollView>
                    <HeaderTitle title='Безопасный город' />
                    {/* <HeaderTitle title={counterState.count} /> */}
                    <ListScreens data={secureCity} navigation={navigation} />
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container
})
