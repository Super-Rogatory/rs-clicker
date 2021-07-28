import * as types from './actionTypes';

export const _incrementDamageCount = (amount) => ({
    type: types.INCREMENT_DAMAGE_COUNTER,
    payload: amount
});

