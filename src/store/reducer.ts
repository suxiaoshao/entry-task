import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import eventReducer from './eventList/reducer';

const reducers = combineReducers({
  user: userReducer,
  eventList: eventReducer,
});

export default reducers;
