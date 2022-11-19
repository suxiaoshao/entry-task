import {EventListAction, EventListActionTypes, EventListState} from './types';

const initialState: EventListState = {
  data: null,
  search: {channels: [], time: {type: 'anytime'}},
};

export default function loginReducer(
  state = initialState,
  action: EventListAction,
): EventListState {
  switch (action.type) {
    case EventListActionTypes.SET_EVENT_LIST_DATA:
      return {...state, data: action.payload};
    case EventListActionTypes.SET_EVENT_LIST_SEARCH:
      return {...state, search: action.payload};
    default:
      return state;
  }
}
