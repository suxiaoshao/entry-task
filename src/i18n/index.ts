import i18n, {Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './lang/en.json';

console.log('RNLocalize', RNLocalize);

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode;

const resources: Resource = {
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: systemLanguage ?? 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
  });

export default i18n;
