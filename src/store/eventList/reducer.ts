import {EventListAction, EventListActionTypes, EventListState} from './types';

const initialState: EventListState = {data: null, search: {}};

export default function loginReducer(
  state = initialState,
  action: EventListAction,
): EventListState {
  switch (action.type) {
    case EventListActionTypes.SET_EVENT_LIST_DATA:
      return {...state, data: action.payload};
    case EventListActionTypes.SET_EVENT_LIST_SEARCH_CHANNELS:
      if (action.payload === null) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {channels: _, ...rest} = state.search;
        return {...state, search: rest};
      } else {
        return {...state, search: {...state.search, channels: action.payload}};
      }
    case EventListActionTypes.SET_EVENT_LIST_SEARCH_TIME:
      return {
        ...state,
        search: {
          ...state.search,
          before: action.payload.before,
          after: action.payload.after,
        },
      };
    default:
      return state;
  }
}
