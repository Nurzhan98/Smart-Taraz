import React, { Component } from 'react'
import {View, StyleSheet, Text, Button, Modal, TouchableHighlight, TextInput} from 'react-native'
import { Textarea } from 'native-base';
// import { } from 'react-native-paper'
import HeaderBack from '../components/HeaderBack';
import { container } from '../styles/styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default class Submission extends Component {
    state = {
        modalVisible: false
    }

    showModal = () => {
        let {modalVisible} = this.state
        this.setState({modalVisible: true}, () => {
            setTimeout(() => {
                this.setState({modalVisible: false})
            },2000)
        })
    }
    render() {
        const { navigation }= this.props
        const { modalVisible} = this.state
        return (
            <View style={styles.container} >
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }} 
                > 
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Обращение отправлено</Text>
                    </View>
                    </View> 
                </Modal>
                <HeaderBack title='Подача обращений' navigation={navigation} />
                <Text style={styles.text}> Текст обращения (минимум 10 символов) </Text>
                <View style={styles.textArea}>
                    <TextInput multiline  placeholder='Введите текст образения и нажмите “Отправить обращение”'   />
                </View>
                <View style={styles.textAreaSmall}>
                    <TextInput  keyboardType='email-address'  placeholder='Адрес'   />
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.btns}>
                        <Text style={styles.text} >Прикрепить файл</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.showModal}>
                    <View style={styles.btns}>
                        <Text style={styles.text} >Отправить обращение</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}; 

const styles = StyleSheet.create({ 
    container,
    textArea: {
        width: '100%',
        backgroundColor: '#fff',
        height: 140,
        borderRadius: 7,
        marginTop: 10,
    },
    text: {
        color: '#fff',
        marginTop: 10,
        fontSize: 15,
        fontWeight: '700'
    },
    textAreaSmall: {
        width: '100%',
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 7,
        marginTop: 30,
        marginBottom: 20
    },
    btn: {
        width: 250,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    btns: {
        borderRadius: 10,
        width: '100%',
        height: 40,
        marginBottom: 20,
        backgroundColor:'#0DA22C',
        alignItems: 'center'
    },
    btnAttach: {
        width: 250,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})