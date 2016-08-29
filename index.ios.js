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
import reducers from './app/reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

class Peckish extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
        <Text>
          To get started, edit index.ios.js
        </Text>
        <Text>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <Peckish />
  </Provider>
)

AppRegistry.registerComponent('App', () => App);
