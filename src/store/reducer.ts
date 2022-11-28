import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import eventListReducer from './eventList/reducer';
import channelReducer from './channel/reducer';
import eventDetailReducer from './eventDetail/reducer';

const reducers = combineReducers({
  user: userReducer,
  eventList: eventListReducer,
  channelList: channelReducer,
  eventDetail: eventDetailReducer,
});

export default reducers;
