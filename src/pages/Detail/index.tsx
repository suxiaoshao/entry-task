import {RouterData} from '@/components/AppRouter';
import Header from '@/components/Header';
import useRequest from '@/hooks/useRequest';
import getEventRequest from '@/service/getEvent';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import Warper from './components/Content';
import styles from './styles';

const homeIcon = require('@assets/common/home.png');

export default function () {
  const navigation = useNavigation<NavigationProp<RouterData>>();
  const id = useRoute<RouteProp<RouterData>>().params?.id;
  if (!id) {
    navigation.navigate('Home');
    return null;
  }
  const fetch = useCallback(async () => getEventRequest(id), [id]);
  const [data, refetch] = useRequest(fetch, 'onFnChange');
  return (
    <View style={styles.container}>
      <Header
        leftIcon={homeIcon}
        onLeftPress={() => navigation.navigate('Home')}
      />
      <Warper data={data} refetch={refetch} />
    </View>
  );
}
