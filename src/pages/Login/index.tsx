import React, {useCallback} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import useI18n from '../../i18n/useI18n';
import InputContent from './components/InputContent';
import styles from './style';
import TopContent from './components/TopContent';
import {useAppDispatch} from '../../store/types';
import {login} from '../../store/user/actionCreator';
import useInput from '../../hooks/useInput';
import {verityPassword, verityUsername} from './verity';

const bg = require('../../assets/login/bg.png');

export default function () {
  const t = useI18n();
  const username = useInput('', verityUsername);
  const password = useInput('', verityPassword);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(() => {
    dispatch(login(username.value, password.value));
  }, [dispatch, password.value, username.value]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View style={styles.backgroundColor}>
          <TopContent />
          <InputContent username={username} password={password} />
        </View>
      </ImageBackground>
      <Pressable
        style={styles.button}
        onPress={username.handleSubmit(password.handleSubmit(onSubmit))}>
        <Text style={styles.buttonText}>{t('sing_in')}</Text>
      </Pressable>
    </View>
  );
}
