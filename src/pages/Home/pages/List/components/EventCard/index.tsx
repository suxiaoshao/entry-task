import React from 'react';
import {Image, Text, View} from 'react-native';
import Channel from '../../../../../../components/Channel';
import GoingButton from '../../../../../../components/GoingButton';
import LikeButton from '../../../../../../components/LikeButton';
import {EventItem} from '../../../../../../service/getEventList';
import styles from './styles';
import Time from './Time';

export interface EventCardProps {
  data: EventItem;
}

export default function ({
  data: {
    creator,
    channel,
    name,
    images,
    begin_time,
    end_time,
    description,
    me_going,
    goings_count,
    me_likes,
    likes_count,
  },
}: EventCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.creator}>
          <Image style={styles.avatar} source={{uri: creator.avatar}} />
          <Text style={styles.username}>{creator.username}</Text>
        </View>
        <Channel {...channel} />
      </View>
      <View style={styles.content}>
        <View style={styles.contentLeft}>
          <Text style={styles.titleText}>{name}</Text>
          <Time begin_time={begin_time} end_time={end_time} />
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={styles.description}>
            {description}
          </Text>
        </View>
        {images && images.length > 0 && (
          <Image style={styles.image} source={{uri: images[0]}} />
        )}
      </View>
      <View style={styles.action}>
        <GoingButton me_going={me_going} goings_count={goings_count} />
        <LikeButton
          style={styles.like}
          me_likes={me_likes}
          likes_count={likes_count}
        />
      </View>
    </View>
  );
}
