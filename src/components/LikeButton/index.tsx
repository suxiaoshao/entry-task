import React from 'react';
import {
  Image,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import useI18n from '../../i18n/useI18n';
import styles from './styles';
const likeIcon = require('../../assets/common/like.png');
const unLikeIcon = require('../../assets/common/un_like.png');

export interface LikeButton extends Omit<PressableProps, 'style'> {
  me_likes: boolean;
  likes_count: number;
  style?: StyleProp<ViewStyle>;
}

export default function LikeButton({
  me_likes,
  likes_count,
  style,
  ...props
}: LikeButton) {
  const t = useI18n();
  return (
    <Pressable style={[styles.container, style]} {...props}>
      <Image source={me_likes ? likeIcon : unLikeIcon} style={styles.image} />
      <Text
        style={[styles.text, me_likes ? styles.meLikes : styles.notMeLikes]}>
        {me_likes ? t('i_like_it') : `${likes_count} ${t('like')}`}
      </Text>
    </Pressable>
  );
}
