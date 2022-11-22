import ApiError from '@/components/ApiError';
import Channel from '@/components/Channel';
import Loading from '@/components/Loading';
import Network from '@/components/Network';
import {ResponseTypeWithStatus} from '@/hooks/useRequest';
import {GetEventResponse} from '@/service/getEvent';
import {EventItem} from '@/service/getEventList';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Creator from '../Creator';
import DetailTab from '../DetailTab';
import Tab, {ActiveType} from '../Tab';
import styles from './styles';

export interface ContentProps {
  data: EventItem;
}

function Content({data: {channel, name, creator, ...data}}: ContentProps) {
  const [active, setActive] = React.useState<ActiveType>('detail');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.channelBox}>
          <Channel {...channel} />
        </View>
        <Text style={styles.title}>{name}</Text>
        <Creator {...creator} />
      </View>
      <Tab active={active} setActive={setActive} />
      <DetailTab {...data} active={active} />
    </ScrollView>
  );
}

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
