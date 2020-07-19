import   productsReducer from './productReducers';
import {persistReducer} from 'redux-persist'
import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import selectProductReducer from './selectProductReducer';
import storage from 'redux-persist/lib/storage'
const persistCongig= {
  'key':'root',
  storage,
  whitelist:['products','user']
};
const RootReducer=combineReducers({
   
   products: productsReducer,
    user : userReducer,
    selectedProduct:selectProductReducer,
    cart:cartReducer,
})

export default persistReducer(persistCongig,RootReducer);