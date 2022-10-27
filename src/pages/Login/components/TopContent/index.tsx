import React from 'react';
import {Image, Text, View} from 'react-native';
import useI18n from '../../../../i18n/useI18n';
import useStyles from './styles';
const logo = require('../../../../assets/common/logo.png');

export default function () {
  const t = useI18n();
  const styles = useStyles();
  return (
    <View style={styles.topContent}>
      <Text style={styles.desc}>{t('sing_in_desc')}</Text>
      <Text style={styles.title}>{t('sing_in_title')}</Text>
      <View style={styles.logoContainer}>
        <View style={styles.logoBorder}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.logoBorderOpacity} />
      </View>
    </View>
  );
}
