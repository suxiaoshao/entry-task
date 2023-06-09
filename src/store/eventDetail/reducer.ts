import {
  EventDetailAction,
  EventDetailActionTypes,
  EventDetailState,
} from './types';

const initialState: EventDetailState = {
  event: {type: 'init'},
  footerStatus: {type: 'init'},
  tab: '',
};

export default function eventDetailReducer(
  state = initialState,
  action: EventDetailAction,
): EventDetailState {
  switch (action.type) {
    case EventDetailActionTypes.SET_EVENT_DETAIL_DATA:
      return {...state, event: action.payload};
    case EventDetailActionTypes.SET_EVENT_DETAIL_FOOTER_STATUS:
      return {...state, footerStatus: action.payload};
    case EventDetailActionTypes.SET_EVENT_DETAIL_TAB:
      return {...state, tab: action.payload};
    default:
      return state;
  }
}
