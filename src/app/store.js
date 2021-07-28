import { applyMiddleware, createStore } from "redux";
import combinedReducer from "./reducers/root";
import thunk from 'redux-thunk';

const store = createStore(combinedReducer, 0, applyMiddleware(thunk));

export default store;