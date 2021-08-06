import { damageReducer, levelReducer, authReducer } from './reducer';
import { combineReducers } from 'redux';

const combinedReducer = combineReducers({
    exp: damageReducer,
    level: levelReducer,
    isAuth: authReducer
});

export default combinedReducer;