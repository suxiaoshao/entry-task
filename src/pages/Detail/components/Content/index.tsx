import ApiError from '@/components/ApiError';
import Channel from '@/components/Channel';
import Divider from '@/components/Divider';
import Loading from '@/components/Loading';
import Network from '@/components/Network';
import {EventDetail} from '@/store/eventDetail/types';
import {useAppSelector} from '@/store/types';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Creator from '../Creator';
import DetailTab from '../DetailTab';
import Users from '../Users';
import Tab, {ActiveType} from '../Tab';
import styles from './styles';
import GoingButton from '@/components/GoingButton';
import LikeButton from '@/components/LikeButton';
import Comments from '../Comments';

export interface ContentProps {
  data: EventDetail;
}

function Content({
  data: {
    channel,
    name,
    creator,
    participants,
    me_going,
    me_likes,
    likes,
    comments,
    ...data
  },
}: ContentProps) {
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
      <DetailTab {...data} />
      <Divider style={styles.divider} />
      <Users
        left={
          <GoingButton
            style={styles.left}
            me_going={me_going}
            goings_count={participants.length}
          />
        }
        divider
        users={participants}
      />
      <Users
        left={
          <LikeButton
            style={styles.left}
            me_likes={me_likes}
            likes_count={likes.length}
          />
        }
        users={likes}
      />
      <Divider style={styles.dividerLess4} />
      <Comments comments={comments} />
    </ScrollView>
  );
}

export interface WarperProps {
  refetch: () => void;
}

export default function ({refetch}: WarperProps) {
  const data = useAppSelector(state => state.eventDetail);
  switch (data.type) {
    case 'networkError':
      return <Network refetch={refetch} />;
    case 'apiError':
    case 'jsonError':
      return <ApiError />;
    case 'ok':
      return <Content data={data.payload} />;
    case 'loading':
      return <Loading />;
    default:
      return <Loading />;
  }
}
