import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Me from '../pages/Me';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@/store/types';
import {fetchChannelData} from '@/store/channel/actionCreator';

const Stack = createNativeStackNavigator();
export default function AppRouter() {
  const auth = useAppSelector(data => data.user?.token);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (auth) {
      dispatch(fetchChannelData());
    }
  }, [auth, dispatch]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth ? (
        <>
          <Stack.Screen<RouterName> name="Home" component={Home} />

          <Stack.Screen<RouterName> name="Me" component={Me} />
          <Stack.Screen<RouterName> name="Detail" component={Detail} />
        </>
      ) : (
        <Stack.Screen<RouterName> name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}

export type RouterData = {
  Me: undefined;
  Home: undefined;
  Detail: undefined;
  Login: undefined;
};
export type RouterName = keyof RouterData;
