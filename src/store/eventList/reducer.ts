import {concat} from '../user/reducer';
import {EventListAction, EventListActionTypes, EventListState} from './types';

const initialState: EventListState = {
  data: {type: 'init'},
  search: null,
  more: {type: 'init'},
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
    case EventListActionTypes.SET_EVENT_LIST_DATA_MORE:
      return {
        ...state,
        data: concat(state.data, action.payload),
        more: action.payload,
      };
    default:
      return state;
  }
}
