import React, {useContext, Component} from 'react'
import {Image, View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import { connect } from 'react-redux';
import {signOut} from '../reducers/actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { List } from 'react-native-paper';
import { Accordion } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import ListScreens from '../components/ListScreens';
import { container } from '../Styles';
 
class ServicesCityScreen extends Component {
    render() {
        const secureCity = [
            {title: 'Карта преступности', screen: 'CrimeMap'},
            {title: 'Безопасные маршруты', screen: 'SafeRoutes'},
            {title: 'Безопасные школы', screen: 'SafeSchools'}, 
            {title: 'Экстренные вызовы', screen: 'EmergencyCalls'},
        ]
        const {navigation} = this.props
        return ( 
            <View style={styles.container} >
                <ScrollView>
                    <HeaderTitle title='Безопасный город' />
                    <ListScreens data={secureCity} navigation={navigation} />
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ServicesCityScreen);