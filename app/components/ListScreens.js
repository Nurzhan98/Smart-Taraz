import React, {useContext, Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
 
Icon.loadFont()
export default class ListScreens extends Component {
    render() {  
        const {navigation, data} = this.props  
        return ( 
            <ScrollView style={{marginTop: 20}}>
                {
                    data.map((el, i )=> {
                        return (
                            <View key={i}  style={styles.accordionWrap}>
                                <TouchableOpacity 
                                    activeOpacity={0.5}  
                                    onPress={ () => navigation.navigate(el.screen) }
                                >
                                    <View style={styles.accordionHeader} >
                                        <Text style={styles.accordionText} > {el.title} </Text>
                                        <Icon name='page-next-outline' size={18} color='#000' />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
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
    accordionText: {
        fontWeight: '700',
    },
})