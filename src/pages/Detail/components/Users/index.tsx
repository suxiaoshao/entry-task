import React, {LegacyRef, useMemo, useState} from 'react';
import {UserItem} from '@/service/getEventList';
import {Image, Pressable, View} from 'react-native';
import Divider from '@/components/Divider';
import useStyles from './styles';

const moreIcon = require('@/assets/detail/more.png');
const lessIcon = require('@/assets/detail/less.png');

export interface ParticipantsProps {
  users: UserItem[];
  divider?: boolean;
  left?: React.ReactNode;
}

function Users(
  {users, divider, left}: ParticipantsProps,
  ref: LegacyRef<View>,
) {
  const [open, setOpen] = useState(false);
  const {styles, onLayout} = useStyles();
  const displayUsers = useMemo(() => {
    if (open) {
      const result: UserItem[][] = [];
      for (let i = 0; i < users.length; i = i + 7) {
        result.push(users.slice(i, i + 7));
      }
      return result;
    } else {
      return [users.slice(0, 6)];
    }
  }, [open, users]);
  return (
    <View style={styles.container} ref={ref}>
      <View style={styles.content}>
        {left}
        <View onLayout={onLayout} style={styles.right}>
          {displayUsers.map((user, index) => (
            <View key={index} style={styles.rightLine}>
              {user.map(({avatar, id}, lineIndex) => (
                <Image
                  style={[styles.image, lineIndex !== 0 && styles.margin]}
                  source={{uri: avatar}}
                  key={id}
                />
              ))}
              {open && index === displayUsers.length - 1 && (
                <Pressable onPress={() => setOpen(false)}>
                  <Image
                    style={[styles.image, styles.margin]}
                    source={lessIcon}
                  />
                </Pressable>
              )}
              {!open && (
                <Pressable onPress={() => setOpen(true)}>
                  <Image
                    style={[styles.image, styles.margin]}
                    source={moreIcon}
                  />
                </Pressable>
              )}
            </View>
          ))}
        </View>
      </View>
      {divider && <Divider style={styles.divider} />}
    </View>
  );
}
export default React.forwardRef(Users);
