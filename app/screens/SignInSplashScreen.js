import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import { userData } from '../models/usersData';
import { observer, inject } from 'mobx-react'


@inject('store')
@observer
export default class SignInSplashScreen extends Component {
    state = {
        isValidName: true,
        isValidPassword: true,
        hidePassword: true,
        showOk: false,
        user: { 
            userName: '',
            userPassword: ''
        }
    }


    nameInputChange = (val) => {
        const {user} = this.state
        user.userName = val
        this.setState({
            user,
            isValidName: true
        })
    }

    passwordInputChange = (val) => {
        const {user} = this.state
        user.userPassword = val
        this.setState({user})
    }

    handleValidUser = (val) => {
        if(val.length < 4) {
            this.setState({isValidName: false})
        } else {
            this.setState({
                isValidName: true,
                showOk: true
            })
        }
    }

    handleHidePassword = () => {
        const {hidePassword} = this.state
        this.setState({
            hidePassword: !hidePassword
        })
    }

    handleLogin = () => {
        const { setToken } = this.props.store
        const { navigation } = this.props
        const {name, password, token} = userData
        const {userName, userPassword} = this.state.user
        if(name == userName && password == userPassword) { 
            // setToken(token) 
            navigation.navigate('AppLockScreen')
        } else {
            Alert.alert(
                "Не удалось войти.",
                "Убедитесь, что вы правильно ввели логин и пароль",
                [
                  { text: "OK", onPress: () => {}, style: "cancel" }
                ],
                { cancelable: false }
            )
        }
        
    }

    render() {
        const {navigation} = this.props
        const {isValidName, isValidPassword, hidePassword, showOk} = this.state
        return (
            <View style={styles.container}>
              <StatusBar backgroundColor='#009387' barStyle="light-content"/>
              <View style={styles.header}>
                  <Text style={styles.text_header}>Добро пожаловать!</Text>
              </View>
              <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                  <Text style={styles.text_footer}>
                      Имя пользователя
                  </Text>
                  <View style={styles.action}>
                      <FontAwesome  name="user-o" size={20}/>
                      <TextInput 
                            placeholder="Введите логин"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => this.nameInputChange(val)}
                            onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)}
                      />
                      {
                          showOk && 
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather 
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                      }
                      
                  </View>
                    {
                        !isValidName &&
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Имя пользователя должно состоять из 4 символов.</Text>
                        </Animatable.View>
                    }
                  <Text style={styles.text_footer}> Пароль </Text>
                  <View style={styles.action}>
                      <Feather name="lock" size={20} />
                      <TextInput  
                          placeholder="Введите пароль"
                          placeholderTextColor="#666666"
                          secureTextEntry={hidePassword ? true : false}
                          style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={(val) => this.passwordInputChange(val)}
                      />
                      <TouchableOpacity
                        onPress={this.handleHidePassword}
                      >
                          <Feather 
                              name={hidePassword ? 'eye-off' : 'eye' }
                              color="grey"
                              size={20}
                          />
                      </TouchableOpacity>
                  </View>
                    {
                        !isValidPassword && 
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Пароль должен состоять из 5 символов.</Text>
                        </Animatable.View>
                    }
                  <TouchableOpacity>
                      <Text style={{color: '#009387', marginTop:15}}>Забыли Пароль?</Text>
                  </TouchableOpacity>
                  <View style={styles.button}>
                      <TouchableOpacity
                          style={styles.signIn}
                          onPress={this.handleLogin}
                      >
                          <View style={{...styles.signIn, backgroundColor: '#01ab9d' }} >
                              <Text style={styles.textSign}>Войти</Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={() => navigation.navigate('SignUpScreen')}
                          style={[styles.signIn, {
                              borderColor: '#009387',
                              borderWidth: 1,
                              marginTop: 15
                          }]}
                      >
                          <Text style={styles.textSign}>Регистрация</Text>
                      </TouchableOpacity>
                  </View>
              </Animatable.View>
            </View>
        );
    }  
};


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
