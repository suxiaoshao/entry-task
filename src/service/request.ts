import {Enum} from '@/utils/types';
import {Alert} from 'react-native';
import store from '../store';

const URL_BASE = 'http://sec.dev.fsg2.test.shopee.io/entrytask/api/v1';
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ResponseData<DATA extends object> {
  code: number;
  message: string;
  data: DATA;
}

export default async function appRequest<
  Req extends object | undefined,
  Res extends object,
>(
  path: string,
  method: Method = 'GET',
  body?: Req,
): Promise<ResponseType<Res>> {
  // create headers
  const auth = store.getState().user?.token;
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });
  if (auth) {
    headers.append('x-blackcat-token', auth);
  }
  // send request
  try {
    const response = await fetch(`${URL_BASE}${path}`, {
      method: method,
      body: JSON.stringify(body),
      headers,
    });
    try {
      const data: ResponseData<Res> = await response.json();
      if (data.code === 0 && data.data) {
        return {type: 'ok', payload: data.data} as ResponseType<Res>;
      } else {
        // be api error
        Alert.alert('Error', data.message);
        return {type: 'apiError', payload: new Error(data.message)};
      }
    } catch (err) {
      // json parse error
      if (err instanceof Error) {
        Alert.alert('Error', err.message);
        return {type: 'jsonError', payload: err};
      }
      return {type: 'unknown'};
    }
  } catch (err) {
    // network error
    if (err instanceof Error) {
      Alert.alert('Error', err.message);
      return {type: 'networkError', payload: err};
    }
    return {type: 'unknown'};
  }
}

export type ResponseType<T extends object> =
  | Enum<'ok', T>
  | Enum<'networkError', Error>
  | Enum<'apiError', Error>
  | Enum<'jsonError', Error>
  | Enum<'unknown'>;

export function toastResponse(res: ResponseType<any>) {
  if (res.type === 'networkError') {
    Alert.alert(res.payload.message);
  } else if (res.type === 'apiError') {
    Alert.alert(res.payload.message);
  } else if (res.type === 'jsonError') {
    Alert.alert(res.payload.message);
  }
}
