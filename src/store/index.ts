import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const middleware = applyMiddleware(thunkMiddleware);

export default createStore(reducer, {}, middleware);
