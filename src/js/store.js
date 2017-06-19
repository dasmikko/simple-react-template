import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducers/Reducer";
import ReduxThunk from 'redux-thunk'


const middleware = applyMiddleware(ReduxThunk);

export default () => {
    return createStore(reducers, middleware);
};