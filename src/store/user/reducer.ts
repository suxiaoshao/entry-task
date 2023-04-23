import {
  EventListWithStatus,
  UserAction,
  UserActionTypes,
  UserState,
} from './types';

const initialState: UserState = {
  tab: 'liked',
  likedEvents: {type: 'init'},
  goingEvents: {type: 'init'},
  pastEvents: {type: 'init'},
  likedMore: {type: 'init'},
  goingMore: {type: 'init'},
  pastMore: {type: 'init'},
};

export default function userReducer(
  state = initialState,
  action: UserAction,
): UserState {
  switch (action.type) {
    case UserActionTypes.SET_USER_DATA:
      return {...state, ...action.payload};
    case UserActionTypes.SET_USER_TAB:
      return {...state, tab: action.payload};
    case UserActionTypes.SET_USER_EVENT_LIST:
      switch (action.payload.tab) {
        case 'liked':
          return {...state, likedEvents: action.payload.data};
        case 'going':
          return {...state, goingEvents: action.payload.data};
        case 'past':
          return {...state, pastEvents: action.payload.data};
        default:
          return state;
      }
    case UserActionTypes.SET_USER_EVENT_LIST_MORE:
      switch (action.payload.tab) {
        case 'liked':
          return {
            ...state,
            likedEvents: concat(state.likedEvents, action.payload.data),
            likedMore: action.payload.data,
          };
        case 'going':
          return {
            ...state,
            goingEvents: concat(state.goingEvents, action.payload.data),
            goingMore: action.payload.data,
          };
        case 'past':
          return {
            ...state,
            pastEvents: concat(state.pastEvents, action.payload.data),
            pastMore: action.payload.data,
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export function concat(
  left: EventListWithStatus,
  right: EventListWithStatus,
): EventListWithStatus {
  if (left.type === 'ok' && right.type === 'ok') {
    return {
      type: 'ok',
      payload: {
        ...right.payload,
        events: [...left.payload.events, ...right.payload.events],
      },
    };
  }
  return left;
}
