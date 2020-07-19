
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import RootReducer from './Reducers/rootReducer';

export const store=createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store);
