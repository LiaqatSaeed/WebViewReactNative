/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Login from './scr/Screen/CompanyInput'
import SplashScreen from './scr/Screen/SplashScreen1'

export default class App extends Component{
  state = {
    Animating:false
  }
  render() {
    if (this.state.Animating == true) {
      return (   
        <View style={styles.container}>
        <Login/>      
        </View>
      );
    }
    else{
      return (         
        <SplashScreen Animating={(Name)=> this.setState({
          Animating:Name
                            }) }/>      

      );
    }

  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
};
