import React, { Component} from 'react'
import {View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import {signOut} from '../reducers/actions'
import HeaderTitle from '../components/HeaderTitle';
import ListScreens from '../components/ListScreens';
import { container } from '../Styles';
 
class Services extends Component {
    render() {
        const dataArray = [ 
            { title: "Городские услуги", content: "Lorem ipsum dolor sit amet", screen: 'CityService' },
            { title: "Новости", content: "Lorem ipsum dolor sit amet", screen: 'News' },
            { title: "Общественный транспорт", content: "Lorem ipsum dolor sit amet", screen: 'PublicTransport' },
            { title: "Подача обращений", content: "Lorem ipsum dolor sit amet", screen: 'Submission' },
            { title: "Досуг", content: "Lorem ipsum dolor sit amet", screen: 'DosugStack' },
            { title: "Медицина", content: "Lorem ipsum dolor sit amet", screen: 'MedicineStack' },
            // { title: "Образование", content: "Lorem ipsum dolor sit amet" },
            // { title: "Активный житель", content: "Lorem ipsum dolor sit amet" },
            // { title: "COVID 2020", content: "Lorem ipsum dolor sit amet" },
        ];   
        const {navigation} = this.props  
        return ( 
            <View style={styles.container} >
                <HeaderTitle title='Услуги' />
                <ListScreens data={dataArray} navigation={navigation} />
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Services);