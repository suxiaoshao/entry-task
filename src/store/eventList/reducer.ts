import {EventListAction, EventListActionTypes, EventListState} from './types';

const initialState: EventListState = {
  data: null,
  search: null,
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
      if (state.data === null) {
        return {...state, data: action.payload};
      } else {
        return {
          ...state,
          data: {
            ...action.payload,
            events: [...state.data.events, ...action.payload.events],
          },
        };
      }
    default:
      return state;
  }
}
