import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import reducers from './app/reducers.js';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

class Peckish extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
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

AppRegistry.registerComponent('Peckish', () => App);
