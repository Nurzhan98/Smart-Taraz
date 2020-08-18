import React, {useContext, Component} from 'react'
import {Image, View, StyleSheet, Text, TextInput, Button} from 'react-native'
// import { FontAwesome, Entypo } from '@expo/vector-icons';
// import {AuthContext} from '../context'


export default class ServicesCityScreen extends Component {
    render() {
        // const { signOut } = useContext(AuthContext)
        return (
            <View style={styles.container} >
                {/* <View style={styles.headerImage} >
                    <Image style={styles.img} source={require('../../assets/icons/image.png')} />
                    <Image style={styles.img}  source={require('../../assets/icons/image1.png')} />
                </View>
                <View style={styles.titleWrap} >
                    <Entypo name="menu" size={24} onPress={() => navigation.toggleDrawer()} color="#fff" />
                    <Text style={styles.title} >TARAZ CITY</Text>
                </View>
                <View>
                    <Text style={{color: '#fff', fontSize: 30}} >ServicesCityScreen</Text>
                    <Button title='Выйти' onPress={() => signOut()} />
                </View> */}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#09104C',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    headerImage:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: 80,
        height: 80
    },
    title: {
        fontFamily: 'roboto-bold',
        color: '#F8F8F8',
        fontSize: 30
    },
    titleWrap: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    signWrap: {
        paddingHorizontal: 15,
    },
    inputWrap: {
        flexDirection: 'row',
        height: 25,
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    input: {
        marginLeft: 10
    },
    btnWrap: {
        marginBottom: 20
    },
    btnsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    btnWrap2: {
        width: '40%'
    },
    bottomWrap: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomText: {
        color: '#FFFFFF'
    }
})