import React from 'react';
import {View, Text, ImageBackground, Pressable, Image} from 'react-native';
import useI18n from '../../i18n/useI18n';
import useStyles from './style';
const bg = require('../../assets/login/bg.png');
const logo = require('../../assets/login/logo.png');

export default function () {
  const t = useI18n();
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View style={styles.backgroundColor}>
          <Text style={styles.desc}>{t('sing_in_desc')}</Text>
          <Text style={styles.title}>{t('sing_in_title')}</Text>
          <Image style={styles.logo} source={logo} />
        </View>
      </ImageBackground>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{t('sing_in')}</Text>
      </Pressable>
    </View>
  );
}
