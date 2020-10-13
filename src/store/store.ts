import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
import reducers from './combinedReducers';

// const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, composeWithDevTools(applyMiddleware()));
