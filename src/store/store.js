import{compose,createStore,applyMiddleware} from 'redux';
import{ logger} from 'redux-logger';
import { combineReducer } from './root-reducer';
 import { persistStore,persistReducer } from 'redux-persist';
 import storageSession from 'redux-persist/lib/storage'//middle ware the will run before any dispatch it consider one of the enhancing to use in project
import { custemMiddleWare } from './MiddleWares';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './root-saga';

 import {configureStore} from '@reduxjs/toolkit'
//inject saga middleWareFirst
 const sagaMiddleWare =createSagaMiddleWare();
//  //replace thunk with saga;
const MiddleWares = [custemMiddleWare] 
 

// in order to use MiddleWare we have top applyMiddleware First
const persisitConfig ={
    key:'root',
    storage:storageSession,
    whitelist:['cart','wishlist']
};
 

const persistedReducer = persistReducer(persisitConfig,combineReducer)



// const enhancingMiddleWare = composeEnhancer(applyMiddleware(...MiddleWares));
//create store take three args 1 is the actual combaine store
//  2 is the additional initializing state 
// 3 is the Middlewares
//adding persist
export const  store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefultMiddleWare)=>getDefultMiddleWare({
        serializableCheck:false

    }).concat(MiddleWares,sagaMiddleWare)
});
// after store run
sagaMiddleWare.run(rootSaga)
export const persistor = persistStore(store)
//without persiste
// export const  store = createStore(combineReducer,undefined,enhancingMiddleWare)