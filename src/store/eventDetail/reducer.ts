import {
  EventDetailAction,
  EventDetailActionTypes,
  EventDetailState,
} from './types';

const initialState: EventDetailState = {type: 'init'};

export default function eventDetailReducer(
  state = initialState,
  action: EventDetailAction,
): EventDetailState {
  switch (action.type) {
    case EventDetailActionTypes.SET_EVENT_DETAIL_DATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
