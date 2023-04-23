import {useAppSelector} from '@/store/types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const emailIcon = require('@assets/me/email.png');

export default function () {
  const user = useAppSelector(state => state.user?.user);
  if (user === undefined) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: user.avatar}} />
      <Text style={styles.username}>{user.username}</Text>
      <View style={styles.email}>
        <Image style={styles.emailIcon} source={emailIcon} />
        <Text style={styles.emailText}>{user.email}</Text>
      </View>
    </View>
  );
}
