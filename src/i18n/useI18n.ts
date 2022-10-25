import {useTranslation} from 'react-i18next';

export type KeyType = 'home_name' | 'me_name' | 'detail_name' | 'login_name';
export default function useI18n() {
  const {t} = useTranslation();
  return (key: KeyType) => t(key);
}
