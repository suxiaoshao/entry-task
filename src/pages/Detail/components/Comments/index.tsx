import {CommentItem} from '@/service/getEventComments';
import {fromNow} from '@/utils/time';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const replyIcon = require('@assets/detail/reply.png');

export interface CommentsProps {
  comments: CommentItem[];
}

export default function ({comments}: CommentsProps) {
  return (
    <View style={styles.container}>
      {comments.map((item, index) => (
        <>
          <Comment item={item} />
          {index !== comments.length - 1 && <ContentDivider />}
        </>
      ))}
    </View>
  );
}

function Comment({
  item: {
    comment,
    user: {avatar, username},
    updatedAt,
  },
}: {
  item: CommentItem;
}) {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: avatar}} />
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.name}>{username}</Text>
          <Text style={styles.time}>{fromNow(updatedAt)}</Text>
        </View>
        <Text style={styles.text}>{comment}</Text>
      </View>
      <Image source={replyIcon} style={styles.reply} />
    </View>
  );
}

function ContentDivider() {
  return <View style={styles.divider} />;
}
