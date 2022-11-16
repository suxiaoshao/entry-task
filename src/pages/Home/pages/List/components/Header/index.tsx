import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useAppSelector} from '../../../../../../store/types';
import useStyles from './styles';

const searchIcon = require('@assets/common/search.png');
const logoIcon = require('@assets/common/logo.png');
export default function Header() {
  const styles = useStyles();
  const avatar = useAppSelector(state => state.user?.user.avatar);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchWrapper}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Image style={styles.search} source={searchIcon} />
      </Pressable>
      <Image style={styles.logo} source={logoIcon} />
      <Image style={styles.avatar} source={{uri: avatar}} />
    </View>
  );
}
