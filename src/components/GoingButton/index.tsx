import React from 'react';
import {Image, Pressable, PressableProps, Text} from 'react-native';
import useI18n from '../../i18n/useI18n';
import styles from './styles';
const goingIcon = require('../../assets/common/going.png');
const unGoingIcon = require('../../assets/common/un_going.png');

export interface GoingButtonProps extends PressableProps {
  me_going: boolean;
  goings_count: number;
}

export default function GoingButton({
  me_going,
  goings_count,
  ...props
}: GoingButtonProps) {
  const t = useI18n();
  return (
    <Pressable style={styles.container} {...props}>
      <Image source={me_going ? goingIcon : unGoingIcon} style={styles.image} />
      <Text
        style={[styles.text, me_going ? styles.meGoing : styles.notMeGoing]}>
        {me_going ? t('i_am_going') : `${goings_count} ${t('going')}`}
      </Text>
    </Pressable>
  );
}
