import dayjs from 'dayjs';

export function formatDate(time: string): string {
  return dayjs(time).format('DD MMM YYYY HH:mm');
}
