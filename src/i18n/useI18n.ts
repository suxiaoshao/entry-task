import {useTranslation} from 'react-i18next';
import type en from './lang/en.json';

export type I18nKey = keyof typeof en;

export default function useI18n(): (key: I18nKey) => string {
  const {t} = useTranslation();
  return (key: I18nKey) => t(key);
}
