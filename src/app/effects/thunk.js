import { _incrementDamageCount, _incrementLevel, _setAuth, _removeAuth } from '../actions/actionCreator';

export const incrementDamageCount = (amount) => {
  return (dispatch) => {
    dispatch(_incrementDamageCount(amount));
  };
};

export const increaseLevel = () => {
  return (dispatch) => {
    dispatch(_incrementLevel());
  };
};

export const logIn = () => {
  return (dispatch) => {
      dispatch(_setAuth());
  };
};

export const logOut = () => {
    return(dispatch) => {
        dispatch(_removeAuth());
    }
}