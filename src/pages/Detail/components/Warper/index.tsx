import React from 'react';
import ApiError from '@/components/ApiError';
import Loading from '@/components/Loading';
import Network from '@/components/Network';
import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import Content from '../Content';
import {GetEventResponse} from '@/service/getEvent';

export interface WarperProps {
  data: ResponseTypeWithStatus<GetEventResponse>;
  refetch: () => void;
}

export default function ({data, refetch}: WarperProps) {
  switch (data.type) {
    case 'networkError':
      return <Network refetch={refetch} />;
    case 'apiError':
    case 'jsonError':
      return <ApiError />;
    case 'ok':
      return <Content data={data.payload.event} />;
    case 'loading':
      return <Loading />;
    default:
      return <Loading />;
  }
}
