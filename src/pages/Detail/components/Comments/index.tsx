import {CommentItem} from '@/service/getEventComments';
import {setEventDetailFooterStatusComment} from '@/store/eventDetail/actionCreator';
import {useAppDispatch} from '@/store/types';
import {fromNow} from '@/utils/time';
import React, {LegacyRef} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const replyIcon = require('@assets/detail/reply.png');

export interface CommentsProps {
  comments: CommentItem[];
}

function Comments({comments}: CommentsProps, ref: LegacyRef<View>) {
  return (
    <View style={styles.container} ref={ref}>
      {comments.map((item, index) => (
        <>
          <Comment item={item} />
          {index !== comments.length - 1 && <ContentDivider />}
        </>
      ))}
    </View>
  );
}

function Comment({item: {comment, user, updatedAt}}: {item: CommentItem}) {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: user.avatar}} />
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.name}>{user.username}</Text>
          <Text style={styles.time}>{fromNow(updatedAt)}</Text>
        </View>
        <Text style={styles.text}>{comment}</Text>
      </View>
      <Pressable
        onPress={() => dispatch(setEventDetailFooterStatusComment(user))}>
        <Image source={replyIcon} style={styles.reply} />
      </Pressable>
    </View>
  );
}

function ContentDivider() {
  return <View style={styles.divider} />;
}

export default React.forwardRef(Comments);
