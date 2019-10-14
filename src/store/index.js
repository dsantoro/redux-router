import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';
import createRootReducer from '../reducers';

const middlewares = [
    thunk,
    routerMiddleware(history)
];

const store = createStore(createRootReducer(history), applyMiddleware(...middlewares));

export default store;