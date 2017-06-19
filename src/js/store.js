import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducers/Reducer";
import ReduxThunk from 'redux-thunk'

// Persistant store
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const middleware = applyMiddleware(ReduxThunk);

export default () => {
    let store = createStore(reducers, persistedState, middleware);

    // Update the localStorage on each dispatch
    store.subscribe(() => {
        localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    });

    return store;
};