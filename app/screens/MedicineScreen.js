import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import {signOut} from '../reducers/actions'
import HeaderBack from '../components/HeaderBack';
import ListScreens from '../components/ListScreens';
import { container } from '../Styles';
 
class MedicineScreen extends Component {
    render() {
        const dataArray = [ 
            { title: "ОСМС", content: "Lorem ipsum dolor sit amet", screen: 'CityService' },
            { title: "Льготная категория", content: "Lorem ipsum dolor sit amet", screen: 'News' },
            { title: "Мед организация", content: "Lorem ipsum dolor sit amet", screen: 'News' },
        ];
        const {navigation} = this.props  
        const {activeIndex} = this.state
        return ( 
            <View style={styles.container} >
                <HeaderBack title='Медицина' navigation={navigation} />
                <ListScreens data={dataArray} navigation={navigation} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container
})

const mapStateToProps = (state) => {
    return {
      userToken: state.authReducer.userToken
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: (token) => dispatch(signOut(token))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(MedicineScreen);