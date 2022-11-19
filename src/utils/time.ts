import {
  EventListSearchTime,
  EventListSearchTimeValue,
} from '@/store/eventList/types';
import dayjs from 'dayjs';

export function formatDateLarge(time: string): string {
  return dayjs(time).format('DD MMM YYYY HH:mm');
}

export function formatDateSmall(time: number): string {
  return dayjs(time).format('DD/MM');
}

export function today(): EventListSearchTimeValue {
  const now = dayjs();
  const before = now.startOf('day');
  const after = now.endOf('day');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}

export function tomorrow(): EventListSearchTimeValue {
  const now = dayjs();
  const before = now.add(1, 'day').startOf('day');
  const after = now.add(1, 'day').endOf('day');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}

export function thisWeek(): EventListSearchTimeValue {
  const now = dayjs();
  const before = now.startOf('week');
  const after = now.endOf('week');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}

export function thisMonth(): EventListSearchTimeValue {
  const now = dayjs();
  const before = now.startOf('month');
  const after = now.endOf('month');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}

export function getBeginEndTime(
  date: EventListSearchTime,
): EventListSearchTimeValue {
  switch (date.type) {
    case 'anytime':
      return {};
    case 'today':
      return today();
    case 'tomorrow':
      return tomorrow();
    case 'thisWeek':
      return thisWeek();
    case 'thisMonth':
      return thisMonth();
    case 'later':
      return {
        before: date.payload.before,
        after: date.payload.after,
      };
  }
}
