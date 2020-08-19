import React, { Component } from 'react'
import  {StyleSheet, View, Text} from 'react-native'

export default class HeaderTitle extends Component {
    render() {
        const {title} = this.props
        return (
            <View style={styles.titleWrap} >
                <Text style={styles.titleText} > {title} </Text>
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
        marginTop: 15,
        width: '100%',
        height: 35,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 20
    },
})