import * as types from '../actions/actionTypes';


export const damageReducer = (state = 0, action) => {
    switch(action.type){
        case types.INCREMENT_DAMAGE_COUNTER:
            return state + action.payload;
        default: 
            return state;
    }
}
export const levelReducer = (state = 1, action) => {
    switch(action.type) {
        case types.INCREMENT_LEVEL:
            return state + 1;
        default:
            return state;
    }
}