/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var LoginComponent = require('./js/component/LoginComponent');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
});


export default class GithubClient extends Component {
  render() {
    return (
     <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: 'github.com',
          component: LoginComponent
        }} />   
    );
  }
}

AppRegistry.registerComponent('GithubClient', () => GithubClient);
