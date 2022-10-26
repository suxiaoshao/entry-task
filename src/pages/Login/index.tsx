import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import useI18n from '../../i18n/useI18n';
import InputContent from './components/InputContent';
import styles from './style';
import TopContent from './components/TopContent';
const bg = require('../../assets/login/bg.png');

export default function () {
  const t = useI18n();

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View style={styles.backgroundColor}>
          <TopContent />
          <InputContent />
        </View>
      </ImageBackground>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{t('sing_in')}</Text>
      </Pressable>
    </View>
  );
}
