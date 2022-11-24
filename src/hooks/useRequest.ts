import {useCallback, useEffect, useState} from 'react';
import {ResponseType} from '@/service/request';
import {Enum} from '@/utils/types';

export default function <T extends object>(
  fn: () => Promise<ResponseType<T>>,
  setRunMode: 'onlyCall' | 'onFnChange' = 'onlyCall',
): UseRequestReturn<T> {
  const [data, setData] = useState<ResponseTypeWithStatus<T>>({type: 'init'});
  const func = useCallback(async () => {
    setData({type: 'loading'});
    const res = await fn();
    setData(res);
  }, [fn]);
  useEffect(() => {
    if (setRunMode === 'onFnChange') {
      func();
    }
  }, [func, setRunMode]);
  return [data, func];
}

export type UseRequestReturn<T extends object> = [
  ResponseTypeWithStatus<T>,
  () => void,
];

export type ResponseTypeWithStatus<T extends object> =
  | ResponseType<T>
  | Enum<'loading'>
  | Enum<'init'>;
