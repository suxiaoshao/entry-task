import React from 'react';
import {Image, View} from 'react-native';
import {useAppSelector} from '../../../../store/types';
import useStyles from './styles';

const searchIcon = require('../../../../assets/common/search.png');
const logoIcon = require('../../../../assets/common/logo.png');
export default function Header() {
  const styles = useStyles();
  const avatar = useAppSelector(state => state.user?.user.avatar);

  return (
    <View style={styles.container}>
      <Image style={styles.search} source={searchIcon} />
      <Image style={styles.logo} source={logoIcon} />
      <Image style={styles.avatar} source={{uri: avatar}} />
    </View>
  );
}
