import { _incrementDamageCount, _incrementLevel } from '../actions/actionCreator';

export const incrementDamageCount = (amount) => {
    return (dispatch) => {
        try {
            dispatch(_incrementDamageCount(amount))
        } catch (err) {
            console.log(err, 'from thunk.js');
        }
    }
}

export const increaseLevel = () => {
    return (dispatch) => {
        try {
            dispatch(_incrementLevel());
        } catch (err) {
            
        }
    }
}