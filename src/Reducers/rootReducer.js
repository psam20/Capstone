import   productsReducer from './productReducers';
import {persistReducer} from 'redux-persist'
import {combineReducers} from 'redux';
import userReducer from './userReducer';
import storage from 'redux-persist/lib/storage'
const persistCongig= {
  'key':'root',
  storage,
  whitelist:['products','user']
};
const RootReducer=combineReducers({
   
   products: productsReducer,
    user : userReducer
})

export default persistReducer(persistCongig,RootReducer);