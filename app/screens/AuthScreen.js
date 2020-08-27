import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { Button } from 'native-base'
import { container } from '../styles/styles';
import Axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';

export default class AuthScreen extends Component {
    state = {
        loginData: {
            Email: "nur42097@gmail.com",
            Phone: "87001980802",
            Name: "Nurzhan",
            Surname: "Shynybaev",
            Middlename: "Nurzhan9898",
            Password: "P@ssw0rd",
            PasswordConfirm: "P@ssw0rd",
            Language: "ru",
            City: "Astana"
        }
    }

    handleChange = (e) => {
        console.log(e)
    }

    onChangeEmail = (val) => {
        const { loginData } = this.state
        loginData.Email = val
        this.setState(loginData)
    }

    onChangePhone = (val) => {
        const { loginData } = this.state
        loginData.Phone = val
        this.setState(loginData)
    }

    onChangeName = (val) => {
        const { loginData } = this.state
        loginData.Name = val
        this.setState(loginData)
    }

    onChangeSurname = (val) => {
        const { loginData } = this.state
        loginData.Surname = val
        this.setState(loginData)
    }

    onChangeMiddlename = (val) => {
        const { loginData } = this.state
        loginData.Middlename = val
        this.setState(loginData)
    }

    onChangePassword = (val) => {
        const { loginData } = this.state
        loginData.Password = val
        this.setState(loginData)
    }

    onChangePasswordConfirm = (val) => {
        const { loginData } = this.state
        loginData.PasswordConfirm = val
        this.setState(loginData)
    }

    onChangeLanguage = (val) => {
        const { loginData } = this.state
        loginData.Language = val
        this.setState(loginData)
    }

    onChangeCity = (val) => {
        const { loginData } = this.state
        loginData.City = val
        this.setState(loginData)
    }

    handleSubmit = () => {
        const { loginData } = this.state
        const baseUrl = 'https://dev-crm.fms.kz'
        //const baseUrl = 'https://192.168.1.68:5001/api/'
        const url = baseUrl + '/api/ACMobile/test' 
        // Axios.get(url)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        
        // const url = baseUrl + 'ACMobile/register'
        // let config = {
        //     headers: {
        //         "Content-type":
        //             "application/json; charset=utf-8",
        //     },
        // };
        // Axios.post(url, loginData, config)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         console.log(error.response)
        //     })

        // console.log(loginData)
        // fetch(url)
        //     .then(response => console.log(response))
        //     .then(json => console.log(json))
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }

    render() {
        return (
            // <View style={styles.container} >
            <ScrollView style={styles.container}>
                <View style={styles.titleWrap} >
                    <Text style={styles.title}>TARAZ CITY</Text>
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} type='email' onChangeText={(val) => this.onChangeEmail(val)} placeholder='Email' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangePhone(val)} placeholder='777 777 77 77' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangeName(val)} placeholder='Имя' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangeSurname(val)} placeholder='Фамилия' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangeMiddlename(val)} placeholder='Имя 2' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangePassword(val)} placeholder='Пароль' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangePasswordConfirm(val)} placeholder='Повторите пароль' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangeLanguage(val)} placeholder='Язык' />
                </View>
                <View style={styles.inputsWrap} >
                    <TextInput style={styles.inputs} onChangeText={(val) => this.onChangeCity(val)} placeholder='Город' />
                </View>
                <View style={styles.btnWrap}>
                    <Button style={styles.btn}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.btnText}>Регистрация</Text>
                    </Button>
                </View>
                <View style={styles.footerWrap}>
                    <Text style={styles.footerText}>Служба технической поддержки</Text>
                    <Text style={styles.footerText}>8 (777)-777-77-77</Text>
                </View>
            </ScrollView>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container,
    titleWrap: {
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 25
    },
    footerWrap: {
        alignItems: 'center',
        marginTop: 60
    },
    footerText: {
        color: '#fff'
    },
    inputsWrap: {
        backgroundColor: '#fff',
        marginTop: 20,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },
    inputs: {
        paddingHorizontal: 10,
    },
    btn: {
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A1150',
        height: 40
    },
    btnWrap: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
});