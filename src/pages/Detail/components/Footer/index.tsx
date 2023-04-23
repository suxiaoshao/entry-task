import {useAppDispatch, useAppSelector} from '@/store/types';
import React, {useCallback, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import useI18n from '@/i18n/useI18n';
import {UserItem} from '@/service/getEventList';
import {
  fetchEventDetailDataUnLoading,
  setEventDetailFooterStatusComment,
  setEventDetailFooterStatusInit,
} from '@/store/eventDetail/actionCreator';
import useStyle from './styles';
import sendCommentRequest from '@/service/sendComment';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RouterData} from '@/components/AppRouter';
import {toastResponse} from '@/service/request';
import {dislikeEventRequest, likeEventRequest} from '@/service/likeEvent';
import {joinEventRequest, leaveEventRequest} from '@/service/joinEvent';
const comment2Icon = require('@assets/detail/comment2.png');
const likesIcon = require('@assets/detail/likes.png');
const joinIcon = require('@assets/detail/join.png');
const likesActiveIcon = require('@assets/detail/likes_active.png');
const joinActiveIcon = require('@assets/detail/join_active.png');

export interface FooterProps {
  me_going: boolean;
  me_likes: boolean;
}

export default function ({me_going, me_likes}: FooterProps) {
  const styles = useStyle();
  const t = useI18n();
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.eventDetail.footerStatus);
  const id = useRoute<RouteProp<RouterData>>().params?.id;
  const onGoing = useCallback(async () => {
    if (me_going) {
      const res = await leaveEventRequest(id!);
      toastResponse(res);
    } else {
      const res = await joinEventRequest(id!);
      toastResponse(res);
    }
    dispatch(fetchEventDetailDataUnLoading(id!));
  }, [dispatch, id, me_going]);
  const onLikes = useCallback(async () => {
    if (me_likes) {
      const res = await dislikeEventRequest(id!);
      toastResponse(res);
    } else {
      const res = await likeEventRequest(id!);
      toastResponse(res);
    }
    dispatch(fetchEventDetailDataUnLoading(id!));
  }, [dispatch, id, me_likes]);
  switch (status.type) {
    case 'init':
      return (
        <View style={styles.container}>
          <View style={styles.left}>
            <Pressable
              style={styles.leftItem}
              onPress={() => dispatch(setEventDetailFooterStatusComment())}>
              <Image style={styles.image} source={comment2Icon} />
            </Pressable>
            <Pressable style={styles.leftItem} onPress={onLikes}>
              <Image
                style={styles.image}
                source={me_likes ? likesActiveIcon : likesIcon}
              />
            </Pressable>
          </View>
          <Pressable style={styles.right} onPress={onGoing}>
            <Image
              style={styles.image}
              source={me_going ? joinActiveIcon : joinIcon}
            />
            <Text style={styles.text}>
              {t(me_going ? 'i_am_going' : 'join')}
            </Text>
          </Pressable>
        </View>
      );
    case 'comment':
      return <Comment />;
    case 'commentWithUser':
      return <Comment user={status.payload} />;
  }
}

interface CommentProps {
  user?: UserItem;
}

const closeIcon = require('@assets/detail/close.png');
const sendIcon = require('@assets/detail/send.png');

export function Comment({user}: CommentProps) {
  const styles = useStyle();
  const t = useI18n();
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  const id = useRoute<RouteProp<RouterData>>().params?.id;
  const onSend = useCallback(async () => {
    const res = await sendCommentRequest(id!, comment);
    toastResponse(res);
    dispatch(fetchEventDetailDataUnLoading(id!));
    dispatch(setEventDetailFooterStatusInit());
  }, [comment, dispatch, id]);
  return (
    <View style={styles.container}>
      <View style={[styles.left, styles.commentLeft]}>
        <Pressable onPress={() => dispatch(setEventDetailFooterStatusInit())}>
          <Image style={styles.close} source={closeIcon} />
        </Pressable>
        <TextInput
          placeholder={
            user?.username ? `@${user?.username}` : t('comment_placeholder')
          }
          placeholderTextColor="#D3C1E5"
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
      </View>
      <Pressable style={styles.send} onPress={onSend}>
        <Image source={sendIcon} />
      </Pressable>
    </View>
  );
}
