import * as types from '../actions/actionTypes';

const initialState = 0;

export const damageReducer = (state = initialState, action) => {
    switch(action.type){
        case types.INCREMENT_DAMAGE_COUNTER:
            return state + action.payload;
        default: 
            return state;
    }
}