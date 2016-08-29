import { combineReducers } from 'redux';
import * as recipesReducer from './reducers/recipes';

export default combineReducers(Object.assign(
  recipesReducer,
));
