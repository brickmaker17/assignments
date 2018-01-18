import {combineReducers, createStore} from 'redux';
import things from './things';

const rootReducer = combineReducers({things});
export default createStore(rootReducer);