import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare, combineReducers, compose } from 'redux';
import thunkMiddlware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Peckish extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Peckish', () => Peckish);