import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Me from '../pages/Me';
import * as React from 'react';
import {useAppSelector} from '../store/types';

const Stack = createNativeStackNavigator();
export default function AppRouter() {
  const auth = useAppSelector(data => data.login.token);
  return auth ? (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen<RouterName> name="Home" component={Home} />

      <Stack.Screen<RouterName> name="Me" component={Me} />
      <Stack.Screen<RouterName> name="Detail" component={Detail} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen<RouterName> name="Login" component={Login} />
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
