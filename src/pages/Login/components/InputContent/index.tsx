import {Text, View} from 'react-native';
import React from 'react';
import useI18n from '../../../../i18n/useI18n';
import styles from './styles';
import Input from '../../../../components/Input';
import {UseInputReturn} from '../../../../hooks/useInput';

const userIcon = require('../../../../assets/login/user.png');
const passwordIcon = require('../../../../assets/login/password.png');

export interface InputContentProps {
  username: UseInputReturn<string>;
  password: UseInputReturn<string>;
}

export default function ({username, password}: InputContentProps) {
  const t = useI18n();
  return (
    <View style={styles.inputContent}>
      <Input
        value={username.value}
        onChangeText={username.onChange}
        placeholderTextColor={'#AC8EC9'}
        placeholder={t('username_placeholder')}
        containerStyle={styles.input}
        iconSource={userIcon}
        activeContainStyle={styles.activeContainer}
        textContentType={'username'}
      />
      <Text style={styles.errorText}>{username.error}</Text>
      <Input
        value={password.value}
        onChangeText={password.onChange}
        placeholderTextColor={'#AC8EC9'}
        placeholder={t('password_placeholder')}
        containerStyle={styles.input}
        iconSource={passwordIcon}
        activeContainStyle={styles.activeContainer}
        textContentType={'password'}
        secureTextEntry
      />
      <Text style={styles.errorText}>{password.error}</Text>
    </View>
  );
}
