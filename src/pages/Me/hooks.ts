import {useAppDispatch, useAppSelector} from '@/store/types';
import {fetchUserEventList} from '@/store/user/actionCreator';
import {EventListWithStatus} from '@/store/user/types';
import {useEffect} from 'react';

export function useInitFetch() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  useEffect(() => {
    let data: EventListWithStatus;
    switch (user.tab) {
      case 'liked':
        data = user.likedEvents;
        break;
      case 'going':
        data = user.goingEvents;
        break;
      case 'past':
        data = user.pastEvents;
        break;
    }
    if (data.type === 'init') {
      dispatch(fetchUserEventList(user.tab, true, false));
    }
  }, [dispatch, user]);
}

export function useUserEventList() {
  const data = useAppSelector(state => {
    switch (state.user.tab) {
      case 'liked':
        return [state.user.likedEvents, state.user.likedMore] as const;
      case 'going':
        return [state.user.goingEvents, state.user.goingMore] as const;
      case 'past':
        return [state.user.pastEvents, state.user.pastMore] as const;
    }
  });
  return data;
}
