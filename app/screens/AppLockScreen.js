import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { Avatar  } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import { observer, inject } from 'mobx-react'
import { userData } from '../models/usersData';

@inject('store')
@observer
export default class AppLockScreen extends Component {
    state = {
        lockPassword: [],
        confirmLockPassword: [],
        showConfirm: true,
        isValidPassword: false
    }

    componentWillMount() {
        const _asyncStorage = async () => {
            const {lockPassword, confirmLockPassword} = this.state
            let checkLockPassword
            try {
                checkLockPassword = await AsyncStorage.getItem('Password')
            } catch (error) {
                console.log(error)
            }
            if(checkLockPassword) {
                this.setState({showConfirm: false})
            }
        } 
        _asyncStorage()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const {lockPassword, confirmLockPassword} = this.state
    //     const {setToken} = this.props.store
    //     const {token} = userData
    //     let equally
    //     // if(isValidPassword) {
    //     //     this._asyncToken()
    //     //     setToken(token)
    //     // }
    //     console.log('test')
    //     if(prevState.confirmLockPassword !== this.state.confirmLockPassword){
            
    //         if(lockPassword.length === 4 && confirmLockPassword.length === 4) {
    //             console.log('isValid')
    //             lockPassword.forEach( (val, i) => {
    //                 if(val === confirmLockPassword[i]) this.setState({isValidPassword: true}, () => console.log(this.state.isValidPassword))
    //             })
    //         }
    //     }
    // }

    _asyncStorage = async () => {
        const {lockPassword, confirmLockPassword} = this.state
        let checkLockPassword
        try {
            checkLockPassword = AsyncStorage.getItem('Password')
        } catch (error) {
            console.log(error)
        }
        if(checkLockPassword) {
            this.setState({showConfirm: false})
        } else {
            this.setState({showConfirm: true})
        }
    } 

    handlePassword = (val) => {
        let { lockPassword, confirmLockPassword, showConfirm, isValidPassword } = this.state
        const {navigation} = this.props
        const {setToken} = this.props.store  
        const {token} = userData
        let equally = false
        let password
        if(lockPassword.length < 4 ) {
            lockPassword.push(val)
            this.setState({lockPassword}, async () => {
                if(lockPassword.length === 4 && !showConfirm) {
                    password = lockPassword.toString()
                    password = password.replace(/[\s.,%]/g, '')
                    let validLock
                    try {
                        validLock = await AsyncStorage.getItem('Password')
                    } catch (error) { 
                        console.log(error)
                    }
                    if(password === validLock) {
                        setToken(token)
                    }
                }
            })
        } else if (lockPassword.length === 4 && confirmLockPassword.length < 4 && showConfirm ) {
            confirmLockPassword.push(val)
            password = lockPassword.toString()
            password = password.replace(/[\s.,%]/g, '')
            this.setState({confirmLockPassword}, async () => {
                if(lockPassword.length === 4 && confirmLockPassword.length === 4) {
                    let equally = false
                    await lockPassword.forEach( (val, i) => {
                        if(val === confirmLockPassword[i])  {
                            equally = true
                        } else {
                            equally = false
                        }
                    })
                    if(equally) {
                        try {
                            await AsyncStorage.setItem('Password', password)
                            setToken(token)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }
            }) 
        } else {
            console.log('test')
        }
    }
 
    handleDelete = () => {
        let {lockPassword} = this.state
        lockPassword.pop()
        this.setState({lockPassword})
    }

    handleTouch = () => {
        let {lockPassword} = this.state
        let str = lockPassword.toString()
        str = str.replace(/[\s.,%]/g, '')
    }

    render() {
        const { lockPassword, confirmLockPassword, showConfirm, isValidPassword } = this.state
        console.log('render')
        return (
            <View style={styles.container} >
                <View style={styles.wrapperImg} >
                    <Avatar.Image size={90} source={require('../assets/img/user.jpg')} />
                    <View style={styles.imgTextWrap} >
                        <Text style={styles.imgText}>Нуржан,</Text>
                        <Text style={styles.imgText}>Здравствуйте</Text>
                    </View>
                </View>
                <View style={styles.inputWrap}>
                    <View style={styles.inputs}>
                        <View style={{...styles.input, backgroundColor: lockPassword.length > 0 ? '#A69595' : '#FC3F3F' }}></View>
                        <View style={{...styles.input, backgroundColor: lockPassword.length > 1 ? '#A69595' : '#FC3F3F' }}></View>
                        <View style={{...styles.input, backgroundColor: lockPassword.length > 2 ? '#A69595' : '#FC3F3F' }}></View>
                        <View style={{...styles.input, backgroundColor: lockPassword.length > 3 ? '#A69595' : '#FC3F3F' }}></View>
                    </View>
                    {
                        showConfirm && 
                        <View style={styles.inputs}>
                            <View style={{...styles.input, backgroundColor: confirmLockPassword.length > 0 ? '#A69595' : '#FC3F3F' }}></View>
                            <View style={{...styles.input, backgroundColor: confirmLockPassword.length > 1 ? '#A69595' : '#FC3F3F' }}></View>
                            <View style={{...styles.input, backgroundColor: confirmLockPassword.length > 2 ? '#A69595' : '#FC3F3F' }}></View>
                            <View style={{...styles.input, backgroundColor: confirmLockPassword.length > 3 ? '#A69595' : '#FC3F3F' }}></View>
                        </View>
                    }
                </View>
                <View style={styles.titleWrap} >
                    <Text style={styles.title}>Введите код для быстрого доступа к</Text>
                    <Text style={styles.title}>приложение</Text>
                </View>
                <View style={styles.buttonWrap} >
                    <View style={styles.buttonRow} >
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('1')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('2')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>2</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('3')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>3</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow} >
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('4')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>4</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('5')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>5</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('6')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>6</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow} >
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('7')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>7</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('8')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>8</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('9')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>9</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonRow} >
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={this.handleTouch}
                        >
                            <View style={styles.button}>
                                <Ionicons  name='finger-print' size={40} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={() => this.handlePassword('0')}
                            activeOpacity={0.5}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>0</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonColumn}
                            onPress={this.handleDelete}
                        >
                            <View style={styles.button}>
                                <Feather  name='delete' size={35} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    },
    wrapperImg: {
        marginTop: 40
    },
    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 90,
        alignItems: 'center',
        alignContent: 'center',
        
    },
    imgText: {
        textAlign: 'center'
    },
    imgTextWrap: {
        marginTop: 10
    },
    inputWrap: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
    },
    inputs: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: 20
    },
    input: {
        width: 50,
        height: 3,
    },
    titleWrap:{
        marginTop: 30
    },
    title: {
        textAlign: 'center'
    },
    buttonWrap:{
        marginTop: 50,
        width: '60%'
    },
    buttonRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    buttonColumn: {
        backgroundColor: '#D2C6C6',
        width: 70,
        height: 70,
        borderRadius: 70,
        alignContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 30
    }
})