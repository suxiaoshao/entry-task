import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import List from './pages/List';
import Search from './pages/Search';

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: 'transparent'},
        swipeEnabled: false,
      }}
      initialRouteName="List"
      drawerContent={Search}>
      <Drawer.Screen options={{}} name="List" component={List} />
    </Drawer.Navigator>
  );
}
