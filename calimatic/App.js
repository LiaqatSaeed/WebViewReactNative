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

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
 
      <Login/>
        
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
};
