import React, {useMemo} from 'react';
import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';
import styles from './styles';

export interface TabProps<T extends string = string> {
  value: T;
  children: TabItem<T>[];
  setActive: (value: T) => void;
}

export interface TabItem<T extends string = string> {
  activeIcon: ImageSourcePropType;
  icon: ImageSourcePropType;
  label: string;
  value: T;
}

export default function <T extends string>({
  children,
  value,
  setActive,
}: TabProps<T>) {
  return (
    <View style={styles.tabContainer}>
      {children.map((item, index) => (
        <React.Fragment key={item.value}>
          {index !== 0 && <View style={styles.divider} />}
          <TabItem
            setActive={setActive}
            icon={item.icon}
            label={item.label}
            value={value}
            activeIcon={item.activeIcon}
            activeValue={item.value}
          />
        </React.Fragment>
      ))}
    </View>
  );
}

interface TabItemProps<T extends string> {
  icon: ImageSourcePropType;
  label: string;
  value: T;
  activeValue: T;
  activeIcon: ImageSourcePropType;
  setActive: (value: T) => void;
}

function TabItem<T extends string>({
  icon,
  label,
  value,
  activeValue,
  activeIcon,
  setActive,
}: TabItemProps<T>) {
  const tabActive = useMemo(() => value === activeValue, [value, activeValue]);
  return (
    <Pressable style={styles.tabItem} onPress={() => setActive(activeValue)}>
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
