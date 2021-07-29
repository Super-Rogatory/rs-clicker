import { damageReducer, levelReducer } from './reducer';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
    totaldps: damageReducer,
    level: levelReducer
});

export default combinedReducer;