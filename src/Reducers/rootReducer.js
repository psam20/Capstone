import   productsReducer from './productReducers';
import {persistReducer} from 'redux-persist'
import {combineReducers} from 'redux';

import storage from 'redux-persist/lib/storage'
const persistCongig= {
  'key':'root',
  storage,
  whitelist:['products']
};
const RootReducer=combineReducers({
   
   products: productsReducer,
 
})

export default persistReducer(persistCongig,RootReducer);