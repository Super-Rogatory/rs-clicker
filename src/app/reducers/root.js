import { damageReducer, levelReducer, authReducer } from './reducer';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
    totaldps: damageReducer,
    level: levelReducer,
    isAuth: authReducer
});

export default combinedReducer;