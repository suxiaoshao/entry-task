import {I18nKey} from '../../i18n/useI18n';

export function verityUsername(input: string): I18nKey | undefined {
  if (!/^[a-zA-Z0-9_]{3,16}$/.test(input)) {
    return 'username_error';
  }
  return undefined;
}

export function verityPassword(input: string): I18nKey | undefined {
  if (!/^[a-zA-Z0-9]{3,16}$/.test(input)) {
    return 'password_error';
  }
  return undefined;
}
