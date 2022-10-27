const URL_BASE = 'http://sec.dev.fsg2.test.shopee.io/entrytask/api/v1';
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ResponseData<DATA extends object> {
  code: number;
  message: string;
  data: DATA;
}

export default async function appRequest<
  Req extends object,
  Res extends object,
>(path: string, method: Method = 'GET', body?: Req): Promise<Res> {
  const response = await fetch(`${URL_BASE}${path}`, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data: ResponseData<Res> = await response.json();
  if (data.code === 0 && data.data) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
}
