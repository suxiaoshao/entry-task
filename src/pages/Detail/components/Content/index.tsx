import Channel from '@/components/Channel';
import {EventItem} from '@/service/getEventList';
import React from 'react';
import {Text, View} from 'react-native';
import Creator from '../Creator';
import Tab, {ActiveType} from '../Tab';
import styles from './styles';

export interface ContentProps {
  data: EventItem;
}

export default function ({data: {channel, name, creator}}: ContentProps) {
  const [active, setActive] = React.useState<ActiveType>('detail');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.channelBox}>
          <Channel {...channel} />
        </View>
        <Text style={styles.title}>{name}</Text>
        <Creator {...creator} />
      </View>
      <Tab active={active} setActive={setActive} />
    </View>
  );
}
