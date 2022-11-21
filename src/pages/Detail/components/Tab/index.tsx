import useI18n from '@/i18n/useI18n';
import React, {useMemo} from 'react';
import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';
import styles from './styles';

const detailIcon = require('@/assets/detail/detail.png');
const detailActiveIcon = require('@/assets/detail/detail_active.png');
const commentIcon = require('@/assets/detail/comment.png');
const commentActiveIcon = require('@/assets/detail/comment_active.png');
const participantIcon = require('@/assets/detail/participant.png');
const participantActiveIcon = require('@/assets/detail/participant_active.png');

export interface TabProps {
  active: ActiveType;
  setActive: (value: ActiveType) => void;
}

export default function ({active, setActive}: TabProps) {
  const t = useI18n();
  return (
    <View style={styles.tabContainer}>
      <TabItem
        setActive={setActive}
        icon={detailIcon}
        label={t('details')}
        value={'detail'}
        activeIcon={detailActiveIcon}
        active={active}
      />
      <View style={styles.divider} />
      <TabItem
        setActive={setActive}
        icon={participantIcon}
        label={t('participants')}
        value={'participant'}
        activeIcon={participantActiveIcon}
        active={active}
      />
      <View style={styles.divider} />
      <TabItem
        setActive={setActive}
        icon={commentIcon}
        label={t('comments')}
        value={'comment'}
        activeIcon={commentActiveIcon}
        active={active}
      />
    </View>
  );
}

export type ActiveType = 'detail' | 'participant' | 'comment';

interface TabItemProps {
  icon: ImageSourcePropType;
  label: string;
  value: ActiveType;
  active: ActiveType;
  activeIcon: ImageSourcePropType;
  setActive: (value: ActiveType) => void;
}

function TabItem({
  icon,
  label,
  value,
  active,
  activeIcon,
  setActive,
}: TabItemProps) {
  const tabActive = useMemo(() => value === active, [value, active]);
  return (
    <Pressable style={styles.tabItem} onPress={() => setActive(value)}>
      <Image
        source={tabActive ? activeIcon : icon}
        style={styles.tabItemIcon}
      />
      <Text style={[styles.tabItemText, tabActive && styles.tabItemTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}
