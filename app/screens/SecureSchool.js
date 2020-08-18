import React, { Component } from 'react'
import {Image, View, StyleSheet, Text, TextInput, Button} from 'react-native'
// import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';


export default class SecureSchool extends Component {
    render() {
        return (
            <View style={styles.container} >
                {/* <View style={styles.headerImage} >
                    <Image style={styles.img} source={require('../../assets/icons/image.png')} />
                    <Image style={styles.img}  source={require('../../assets/icons/image1.png')} />
                </View>
                <View style={styles.titleWrap} >
                    <Entypo name="menu" size={30} onPress={() => navigation.toggleDrawer()} color="#000" />
                    <Text style={styles.titleText} >Безопасные школы</Text>
                </View>
                <View>
                    <View>
                        <Text>школа-гимназия № 15</Text>
                        <View>
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#93a1bc" />
                        </View>
                    </View>
                    <View>
                        <Text>школа № 51</Text>
                        <View>
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#bec3c7" />
                            <AntDesign name="star" size={5} color="#bec3c7" />
                            <AntDesign name="star" size={5} color="#bec3c7" />
                        </View>
                    </View>
                    <View>
                        <Text>школа № 47</Text>
                        <View>
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#93a1bc" />
                            <AntDesign name="star" size={5} color="#bec3c7" />
                            <AntDesign name="star" size={5} color="#bec3c7" />
                        </View>
                    </View>
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
    titleWrap: {
        backgroundColor: '#6BA0B6',
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: 40,
        alignItems: 'center'
    },
    titleText: {
        color: '#09104C',
        fontFamily: 'roboto-bold',
        marginLeft: 38,
        fontSize: 24
    },
    mapImgWrap: {
        marginTop: 20,
        paddingBottom: 20
    },
    mapImg: {
        width: '100%',
        height: 400
    }
})