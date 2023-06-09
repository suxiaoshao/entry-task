import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageSourcePropType, Pressable, View} from 'react-native';
import {useAppSelector} from '../../store/types';
import {RouterData} from '../AppRouter';
import useStyles from './styles';

const logoIcon = require('@assets/common/logo.png');

export interface HeaderProps {
  leftIcon?: ImageSourcePropType | undefined;
  onLeftPress?: () => void;
}
export default function Header({leftIcon, onLeftPress}: HeaderProps) {
  const styles = useStyles();
  const avatar = useAppSelector(state => state.user.user?.avatar);
  const navigation = useNavigation<NavigationProp<RouterData>>();

  return (
    <View style={styles.container}>
      <Pressable style={styles.searchWrapper} onPress={onLeftPress}>
        <Image style={styles.search} source={leftIcon} />
      </Pressable>
      <Image style={styles.logo} source={logoIcon} />
      <Pressable onPress={() => navigation.navigate('Me')}>
        <Image style={styles.avatar} source={{uri: avatar}} />
      </Pressable>
    </View>
  );
}
