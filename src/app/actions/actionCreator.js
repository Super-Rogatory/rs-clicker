import * as types from "./actionTypes";

export const _incrementDamageCount = (amount) => ({
  type: types.INCREMENT_DAMAGE_COUNTER,
  payload: amount,
});

export const _incrementLevel = () => ({
  type: types.INCREMENT_LEVEL,
});

export const _setAuth = () => ({
  type: types.SET_AUTH,
});
