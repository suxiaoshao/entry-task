import {useTranslation} from 'react-i18next';
import type en from './lang/en.json';

export default function useI18n() {
  const {t} = useTranslation();
  return (key: keyof typeof en) => t(key);
}
