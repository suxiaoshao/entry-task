import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import i18n from './i18n';
import AppRouter from './components/AppRouter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
