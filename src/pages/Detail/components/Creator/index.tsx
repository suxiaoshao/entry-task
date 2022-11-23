import useI18n from '@/i18n/useI18n';
import {UserItem} from '@/service/getEventList';
import {fromNow} from '@/utils/time';
import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

export interface CreatorProps extends UserItem {}

export default function ({avatar, username, createdAt}: CreatorProps) {
  const t = useI18n();
  return (
    <View style={styles.creator}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.creatorRight}>
        <Text style={styles.creatorName}>{username}</Text>
        <Text style={styles.createAt}>{`${t('published')} ${fromNow(
          createdAt,
        )}`}</Text>
      </View>
    </View>
  );
}
