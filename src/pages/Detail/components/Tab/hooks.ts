import {TabItem} from '@/components/Tab';
import useI18n from '@/i18n/useI18n';
import {useMemo} from 'react';

export function useTabItem() {
  const t = useI18n();
  return useMemo<TabItem<DetailTabType>[]>(
    () => [
      {
        activeIcon: require('@/assets/detail/detail_active.png'),
        icon: require('@/assets/detail/detail.png'),
        label: t('details'),
        value: 'detail',
      },
      {
        activeIcon: require('@/assets/detail/participant_active.png'),
        icon: require('@/assets/detail/participant.png'),
        label: t('participants'),
        value: 'participant',
      },
      {
        activeIcon: require('@/assets/detail/comment_active.png'),
        icon: require('@/assets/detail/comment.png'),
        label: t('comments'),
        value: 'comment',
      },
    ],
    [t],
  );
}

export type DetailTabType = 'detail' | 'participant' | 'comment' | '';
