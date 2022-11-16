import {EventListSearch} from '@/store/eventList/types';
import dayjs from 'dayjs';

export function formatDate(time: string): string {
  return dayjs(time).format('DD MMM YYYY HH:mm');
}

export function today(): Pick<EventListSearch, 'before' | 'after'> {
  const now = dayjs();
  const before = now.startOf('day');
  const after = now.endOf('day');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}

export function tomorrow(): Pick<EventListSearch, 'before' | 'after'> {
  const now = dayjs();
  const before = now.add(1, 'day').startOf('day');
  const after = now.add(1, 'day').endOf('day');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}

export function thisWeek(): Pick<EventListSearch, 'before' | 'after'> {
  const now = dayjs();
  const before = now.startOf('week');
  const after = now.endOf('week');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}
export function thisMonth(): Pick<EventListSearch, 'before' | 'after'> {
  const now = dayjs();
  const before = now.startOf('month');
  const after = now.endOf('month');

  return {
    before: before.valueOf(),
    after: after.valueOf(),
  };
}
