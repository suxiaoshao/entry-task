import {RouterData} from '@/components/AppRouter';
import Header from '@/components/Header';
import {fetchEventDetailData} from '@/store/eventDetail/actionCreator';
import {useAppDispatch} from '@/store/types';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
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
  const dispatch = useAppDispatch();
  const fetch = useCallback(
    () => dispatch(fetchEventDetailData(id)),
    [dispatch, id],
  );
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={homeIcon}
        onLeftPress={() => navigation.navigate('Home')}
      />
      <Warper refetch={fetch} />
    </View>
  );
}
