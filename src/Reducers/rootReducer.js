import   productsReducer from './productReducers';
import {combineReducers} from 'redux';

const RootReducer= combineReducers({
   products: productsReducer,
})

export default RootReducer;