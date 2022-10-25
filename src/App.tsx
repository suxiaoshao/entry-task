import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import Me from './pages/Me';
import Detail from './pages/Detail';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Me" component={Me} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default App;
