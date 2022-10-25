import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode;

const resources = {
  en: {
    translation: {
      home_name: 'Home',
      me_name: 'Me',
      detail_name: 'Detail',
      login_name: 'Login',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: systemLanguage ?? 'en',
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
  });

export default i18n;
