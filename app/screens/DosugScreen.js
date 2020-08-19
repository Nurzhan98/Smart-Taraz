import React, { Component} from 'react'
import {Image, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import {signOut} from '../reducers/actions'
import HeaderBack from '../components/HeaderBack';
import ListScreens from '../components/ListScreens';
import { container } from '../Styles';
 
class DosugService extends Component {
    render() {
        const dataArray = [ 
            { title: "Интересные места", content: "Lorem ipsum dolor sit amet", screen: 'InterestingPlace' },
            { title: "Заведения", content: "Lorem ipsum dolor sit amet", screen: 'Institution' },
        ];
        const {navigation} = this.props  
        return ( 
            <View style={styles.container} >
                <HeaderBack title='Досуг' navigation={navigation} />
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
  
export default connect(mapStateToProps, mapDispatchToProps)(DosugService);