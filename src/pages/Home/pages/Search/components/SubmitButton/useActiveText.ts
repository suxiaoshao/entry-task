import useI18n, {I18nKey} from '@/i18n/useI18n';
import {EventListSearchTime} from '@/store/eventList/types';
import {useAppSelector} from '@/store/types';
import {formatDateSmall, getBeginEndTime} from '@/utils/time';
import {useMemo} from 'react';

export default function (
  time: EventListSearchTime | undefined,
  channels: number[] | undefined,
): string | undefined {
  const all_channels = useAppSelector(state => state.channelList.data);
  const t = useI18n();
  return useMemo(() => {
    if (time === undefined || channels === undefined) {
      return undefined;
    }
    const timeText = formatTimeText(time, t);
    if (channels.length === 0 && timeText === null) {
      return `${t('all')} ${t('activities')}${timeText}`;
    }
    const channelText = channels
      ?.map(id => all_channels.find(channel => channel.id === id)?.name)
      .join(', ');

    return `${t('channel2')} ${channelText} ${t('activities')} ${timeText}`;
  }, [time, channels, t, all_channels]);
}

function formatTimeText(
  time: EventListSearchTime,
  t: (key: I18nKey) => string,
): string {
  const {before, after} = getBeginEndTime(time);
  if (before === undefined && after === undefined) {
    return '';
  }
  if (before === undefined && after !== undefined) {
    return ` ${t('from')} ${formatDateSmall(after)}`;
  }
  if (before !== undefined && after === undefined) {
    return ` ${t('to')} ${formatDateSmall(before)}`;
  }
  if (before !== undefined && after !== undefined) {
    return ` ${t('from')} ${formatDateSmall(after)} ${t(
      'to',
    )} ${formatDateSmall(before)}`;
  }
  return '';
}
