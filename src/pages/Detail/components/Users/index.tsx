import React from 'react';
import {UserItem} from '@/service/getEventList';
import {Image, View} from 'react-native';
import styles from './styles';
import Divider from '@/components/Divider';

export interface ParticipantsProps {
  users: UserItem[];
  divider?: boolean;
  left?: React.ReactNode;
}

export default function ({users, divider, left}: ParticipantsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {left}
        <View style={styles.right}>
          {users.map(({avatar, id}, index) => (
            <Image
              style={[
                styles.image,
                index !== users.length - 1 && styles.margin,
              ]}
              source={{uri: avatar}}
              key={id}
            />
          ))}
        </View>
      </View>
      {divider && <Divider style={styles.divider} />}
    </View>
  );
}
