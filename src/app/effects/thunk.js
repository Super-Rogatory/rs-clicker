import { _incrementDamageCount } from '../actions/actionCreator';

export const incrementDamageCount = (amount) => {
    return (dispatch) => {
        try {
            dispatch(_incrementDamageCount(amount))
        } catch (err) {
            console.log(err, 'from thunk.js');
        }
    }
}