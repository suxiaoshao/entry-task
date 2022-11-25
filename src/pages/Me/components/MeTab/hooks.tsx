import {TabItem} from '@/components/Tab';
import useI18n from '@/i18n/useI18n';
import {GetUserEventsType} from '@/service/getUserEvents';
import {useMemo} from 'react';

export function useTabItem() {
  const t = useI18n();
  return useMemo<TabItem<GetUserEventsType>[]>(
    () => [
      {
        activeIcon: require('@/assets/me/likes_active.png'),
        icon: require('@/assets/me/likes.png'),
        label: t('like'),
        value: 'liked',
      },
      {
        activeIcon: require('@/assets/me/join_active.png'),
        icon: require('@/assets/me/join.png'),
        label: t('going'),
        value: 'going',
      },
      {
        activeIcon: require('@/assets/me/past_active.png'),
        icon: require('@/assets/me/past.png'),
        label: t('past'),
        value: 'past',
      },
    ],
    [t],
  );
}
