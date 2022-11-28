import {Enum} from '@/utils/types';
import {Alert} from 'react-native';
import store from '../store';

const URL_BASE = 'http://localhost:3000/api/v1';
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type ResponseData<DATA extends object> =
  | {
      error?: string;
    } & DATA;

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
    Accept: 'application/json',
  });
  if (auth) {
    headers.append('x-blackcat-token', auth);
  }
  if (body) {
    headers.append('Content-Type', 'application/json');
  }
  // send request
  try {
    const response = await fetch(`${URL_BASE}${path}`, {
      method: method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });
    try {
      const data: ResponseData<Res> = await response.json();
      if (data.error === undefined && data) {
        return {type: 'ok', payload: data} as ResponseType<Res>;
      } else {
        // be api error
        return {type: 'apiError', payload: new Error(data.error)};
      }
    } catch (err) {
      // json parse error
      if (err instanceof Error) {
        return {type: 'jsonError', payload: err};
      }
      return {type: 'unknown'};
    }
  } catch (err) {
    // network error
    if (err instanceof Error) {
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

export async function appRequestWithoutResponse<Req extends object | undefined>(
  path: string,
  method: Method = 'GET',
  body?: Req,
): Promise<ResponseType<{}>> {
  // create headers
  const auth = store.getState().user?.token;
  const headers = new Headers({
    Accept: 'application/json',
  });
  if (auth) {
    headers.append('x-blackcat-token', auth);
  }
  if (body) {
    headers.append('Content-Type', 'application/json');
  }
  // send request
  try {
    const response = await fetch(`${URL_BASE}${path}`, {
      method: method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });
    try {
      const data: ResponseData<{}> = await response.json();
      if (data.error === undefined && data) {
        return {type: 'ok', payload: {}};
      } else {
        // be api error
        return {type: 'apiError', payload: new Error(data.error)};
      }
    } catch (err) {
      return {type: 'ok', payload: {}};
    }
  } catch (err) {
    // network error
    if (err instanceof Error) {
      return {type: 'networkError', payload: err};
    }
    return {type: 'unknown'};
  }
}
