import { _incrementDamageCount, _incrementLevel, _setAuth } from '../actions/actionCreator';

export const incrementDamageCount = (amount) => {
  return (dispatch) => {
    dispatch(_incrementDamageCount(amount));
  };
};

export const increaseLevel = () => {
  return (dispatch) => {
    dispatch(_incrementLevel);
  };
};

export const setAuth = () => {
  return (dispatch) => {
      dispatch(_setAuth());
  };
};