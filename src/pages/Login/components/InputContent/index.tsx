import {View} from 'react-native';
import React from 'react';
import useI18n from '../../../../i18n/useI18n';
import styles from './styles';
import Input from '../../../../components/Input';

const userIcon = require('../../../../assets/login/user.png');
const passwordIcon = require('../../../../assets/login/password.png');

export default function () {
  const t = useI18n();
  return (
    <View style={styles.inputContent}>
      <Input
        placeholderTextColor={'#AC8EC9'}
        placeholder={t('username_placeholder')}
        containerStyle={styles.input}
        iconSource={userIcon}
        activeContainStyle={styles.activeContainer}
      />
      <Input
        placeholderTextColor={'#AC8EC9'}
        placeholder={t('password_placeholder')}
        containerStyle={styles.input}
        iconSource={passwordIcon}
        activeContainStyle={styles.activeContainer}
      />
    </View>
  );
}
