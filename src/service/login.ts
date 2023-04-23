import appRequest from './request';

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
    avatar: string;
  };
}

export interface LoginRequest {
  username: string;
  password: string;
}

export default async function loginRequest(username: string, password: string) {
  const data = await appRequest<LoginRequest, LoginResponse>(
    '/auth/token',
    'POST',
    {username, password},
  );
  return data;
}
