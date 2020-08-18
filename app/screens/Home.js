import React, {useContext, Component} from 'react'
import {Image, View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import { connect } from 'react-redux';
import {signOut} from '../reducers/actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { List } from 'react-native-paper';
import { Accordion } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
 
class Home extends Component {
    state = {
        activeIndex: 0
    }

    handleClick = (index) => {
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    logOut = () => {
        this.props.signOut(null);
    }
    render() {
        const secureCity = [
            {title: 'Карта преступности', screen: 'CrimeMap'},
            {title: 'Уличное освещение', screen: 'StreetLight'},
            {title: 'Безопасные маршруты', screen: 'SafeRoutes'},
            {title: 'Безопасные школы', screen: 'SafeSchools'}, 
            {title: 'Адреса и телефоны опорных пунктов', screen: 'Addresses'},
            {title: 'Экстренные вызовы', screen: 'EmergencyCalls'},
            {title: 'Розыск', screen: 'SafeSchools'},
        ]
        const dataArray = [
            { title: "Безопасный город", content: secureCity },
            { title: "Городские услуги", content: "Lorem ipsum dolor sit amet" },
            { title: "Новости", content: "Lorem ipsum dolor sit amet" },
            { title: "Общественный транспорт", content: "Lorem ipsum dolor sit amet" },
            { title: "Подача обращений", content: "Lorem ipsum dolor sit amet" },
            { title: "Досуг", content: "Lorem ipsum dolor sit amet" },
            { title: "Медицина", content: "Lorem ipsum dolor sit amet" },
            { title: "Образование", content: "Lorem ipsum dolor sit amet" },
            { title: "Активный житель", content: "Lorem ipsum dolor sit amet" },
            { title: "COVID2019", content: "Lorem ipsum dolor sit amet" },
        ];
        const {navigation} = this.props
        const {activeIndex} = this.state
        return ( 
            <View style={styles.container} >
                <ScrollView>
                    {
                        dataArray.map((el, i )=> {
                            return (
                                <View key={i}  style={styles.accordionWrap}>
                                    <TouchableOpacity 
                                        activeOpacity={0.5}  
                                        onPress={ () => this.handleClick(i)}
                                    >
                                        <View style={styles.accordionHeader} >
                                            <Text style={styles.accordionText} > {el.title} </Text>
                                            <Icon name={ activeIndex === i ? 'arrow-down' : 'arrow-up' } size={18} color='#000' />
                                        </View>
                                    </TouchableOpacity>
                                    {
                                        activeIndex === i &&
                                        <View style={styles.accordionContent} >
                                            { 
                                                el.content.map((elem, i) => {
                                                    return (
                                                        <TouchableOpacity 
                                                            key={i}
                                                            activeOpacity={0.5} 
                                                            onPress={ () => {
                                                                console.log(this.props)
                                                                navigation.navigate(elem.screen)
                                                            }}
                                                        >
                                                            <View style={styles.contentWrap} >
                                                                <Text style={styles.contentText} > {elem.title} </Text>
                                                                <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}} >
                                                                    <Icon name='arrow-right-bold' color='#1C9CD8' size={18} />
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </View> 
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C9CD8',
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 60
    },
    accordionWrap: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20
    },
    accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    accordionContent: {
        borderTopWidth: 1,
        borderTopColor: '#1C9CD8',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1C9CD8",
        width: 30,
        height: 30,
        borderRadius: 30,
        position:'absolute', 
        left: 0, 
        top: 4,
        justifyContent: 'center'
    },
    accordionText: {
        fontWeight: '700',
    },
    contentWrap: {
        marginVertical: 5,
        backgroundColor: '#1C9CD8',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentText: {
        color: '#fff',
        fontWeight: '700'
    }
})

const mapStateToProps = (state) => {
    // console.log(state.authReducer);
    return {
      userToken: state.authReducer.userToken
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: (token) => dispatch(signOut(token))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);