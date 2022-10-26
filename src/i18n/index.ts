import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './lang/en.json';

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode;

const resources = {
  en: {
    translation: en,
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
