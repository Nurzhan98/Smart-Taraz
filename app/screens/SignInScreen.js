import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native'
import { Icon } from 'native-base';
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class SignInScreen extends Component {
    render() {
        const {navigation} = this.props
        const { userToken, setToken } = this.props.store
        navigation.setOptions={
            title: 'Регистрация'
        }
        return (
            <View style={styles.container} >
                <View  style={styles.titleWrap} >
                    <Text  style={styles.title}> Smart Taraz </Text>
                </View>
                <View  style={styles.formWrap}>
                   <View  style={styles.inputWrap} >
                        <Image style={styles.inputIcons} source={require('../assets/icons/person.png')} />
                        <TextInput placeholder='Введите номер телефона'  style={styles.inputs} />
                   </View>
                   <View  style={styles.inputWrap}>
                        <Image style={styles.inputIcons} source={require('../assets/icons/clock.png')} />
                        <TextInput placeholder='Введите пароль'  style={styles.inputs} />
                   </View>
                   <Button  style={styles.btnSignIn} onPress={() => setToken('aeae')}  color='#1FA554'  title='Войти' />
                   <View  style={styles.btnWrap} >
                       <View style={styles.authorizationBtn}><Button onPress={() => navigation.navigate('Auth')}  color='#ED7D31' title='Регистрация' /></View>
                       <View style={styles.authorizationBtn}><Button  style={styles.forgotBtn} title='Забыли пароль' /></View>
                   </View>
                </View>
                <View  style={styles.footerWrap}>
                    <Text  style={styles.footerText}>Служба технической поддержки</Text>
                    <Text  style={styles.footerText}>8 (777)-777-77-77</Text>
                </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1C9CD8',
      flex: 1,
      paddingHorizontal: 30,
      paddingVertical: 20
    },
    titleWrap:{
        marginTop: 160,
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 25
    },
    formWrap: {
        marginTop: 40
    },
    inputWrap:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 5,
        borderRadius: 10
    },
    inputs:{},
    inputIcons:{
        width: 25,
        height: 25
    },
    btnSignIn:{
        marginTop: 20
    },
    authorizationBtn:{
        width: '45%'
    },
    forgotBtn:{
        color: '#000'
    },
    btnWrap:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footerWrap:{
        marginTop: 20,
        alignItems: 'center'
    },
    footerText:{
        color: '#fff'
    }
});