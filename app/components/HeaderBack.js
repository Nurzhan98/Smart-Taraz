import React, { Component } from 'react'
import  {StyleSheet, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button} from 'react-native-paper'


export default class HeaderBack extends Component {
    render() {
        const {title, navigation} = this.props
        return (
            <View style={styles.titleWrap} >
                <View></View>
                <Text style={styles.titleText} > {title} </Text>
                <Button 
                    onPress={() => navigation.goBack() }
                    color='transparent' >
                    <Icon color='#000' size={20} name='keyboard-backspace' />
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
        color: "#000",
        fontWeight: "700",
        fontSize: 20
    },
    titleWrap:{
        backgroundColor: '#fff',
        marginTop: 30,
        width: '100%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-between'
    },
})