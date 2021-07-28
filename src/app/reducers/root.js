import { damageReducer } from './reducer';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
    totaldps: damageReducer
});

export default combinedReducer;