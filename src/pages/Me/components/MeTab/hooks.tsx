import {TabItem} from '@/components/Tab';
import useI18n from '@/i18n/useI18n';
import {GetUserEventsType} from '@/service/getUserEvents';
import {useAppSelector} from '@/store/types';
import {EventListWithStatus} from '@/store/user/types';
import {useMemo} from 'react';

export function useTabItem() {
  const t = useI18n();
  const {goingEvents, likedEvents, pastEvents} = useAppSelector(
    state => state.user,
  );
  return useMemo<TabItem<GetUserEventsType>[]>(
    () => [
      {
        activeIcon: require('@/assets/me/likes_active.png'),
        icon: require('@/assets/me/likes.png'),
        label: `${getCountFromEvents(likedEvents)}${t('like')}`,
        value: 'liked',
      },
      {
        activeIcon: require('@/assets/me/join_active.png'),
        icon: require('@/assets/me/join.png'),
        label: `${getCountFromEvents(goingEvents)}${t('going')}`,
        value: 'going',
      },
      {
        activeIcon: require('@/assets/me/past_active.png'),
        icon: require('@/assets/me/past.png'),
        label: `${getCountFromEvents(pastEvents)}${t('past')}`,
        value: 'past',
      },
    ],
    [goingEvents, likedEvents, pastEvents, t],
  );
}

function getCountFromEvents(events: EventListWithStatus): string {
  switch (events.type) {
    case 'ok':
      return `${events.payload.total} `;
  }
  return '';
}
