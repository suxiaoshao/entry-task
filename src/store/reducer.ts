import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import eventReducer from './eventList/reducer';
import channelReducer from './channel/reducer';

const reducers = combineReducers({
  user: userReducer,
  eventList: eventReducer,
  channelList: channelReducer,
});

export default reducers;
