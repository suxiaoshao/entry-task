import {RouterName} from '@/components/AppRouter';
import Detail from '@/pages/Detail';
import Home from '@/pages/Home';
import Me from '@/pages/Me';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export function withRoute(ui: React.ReactElement, name: RouterName) {
  function Inner() {
    return ui;
  }
  function Wrapper(): JSX.Element {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen<RouterName>
            name="Home"
            component={name === 'Home' ? Inner : Home}
          />

          <Stack.Screen<RouterName>
            name="Me"
            component={name === 'Me' ? Inner : Me}
          />
          <Stack.Screen<RouterName>
            name="Detail"
            component={name === 'Detail' ? Inner : Detail}
          />
          {ui}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return <Wrapper />;
}
