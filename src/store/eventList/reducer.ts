import {EventListAction, EventListActionTypes, EventListState} from './types';

const initialState: EventListState = {data: null};

export default function loginReducer(
  state = initialState,
  action: EventListAction,
) {
  switch (action.type) {
    case EventListActionTypes.SET_EVENT_LIST_DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
}
