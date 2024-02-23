import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import localStorage from 'redux-persist/lib/storage';
import rootReducers from '../reducers'; // where reducers is a object of reducers
import sagas from '../sagas';

const config = {
  key: 'root',
  storage: localStorage,
  blacklist: ['loadingReducer'],
  debug: true, //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

// if (__DEV__) {
//   middleware.push(createLogger());
// }

const reducers = combineReducers(rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__();

// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
    // console.log('Test', store.getState());
});
// const configureStore = () => {
//   return { persistor, store };
// };

sagaMiddleware.run(sagas);

export { persistor, store };
