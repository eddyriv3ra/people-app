import { createStore } from 'redux';
import reducers from './combinedReducers'

export default createStore(reducers);