import {useCallback, useMemo, useState} from 'react';
import useI18n, {I18nKey} from '../i18n/useI18n';

export interface UseInputReturn<T> {
  /**
   * input value
   * */
  value: T;
  /**
   * input change handler
   * */
  onChange: (value: T) => void;
  /**
   * error message
   * before onChange and submit will be undefined
   * */
  error: string | undefined;
  /**
   * use for handle submit,
   * verify input value and return error message
   * */
  handleSubmit: <Args extends unknown[]>(
    fn: (...args: Args) => void,
  ) => (...args: Args) => void;
}

export default function useInput<
  T,
  Fn extends ((input: T) => I18nKey | undefined) | undefined,
>(
  /**
   * initial value
   */ initValue: T,
  /**
   * verity function,return error key
   * */
  verifyFn?: Fn,
): UseInputReturn<T> {
  const t = useI18n();
  const [value, setValue] = useState(initValue);
  const [isShowError, setIsShowError] = useState(false);
  const onChange = useCallback((inputValue: T) => {
    setValue(inputValue);
    setIsShowError(true);
  }, []);
  /**
   * inner error message
   * */
  const innerError = useMemo(() => {
    const errorKey = verifyFn?.(value);
    return errorKey ? t(errorKey) : undefined;
  }, [t, value, verifyFn]);
  /**
   * error will be undefined before onChange
   * */
  const error = useMemo(
    () => (isShowError ? innerError : undefined),
    [isShowError, innerError],
  );
  const handleSubmit = useCallback(
    <Args extends unknown[]>(fn: (...args: Args) => void) => {
      return (...args: Args) => {
        /**
         * run fn only when inner error message is undefined
         * */
        if (!innerError) {
          fn(...args);
        }
        setIsShowError(true);
      };
    },
    [innerError],
  );
  return {
    value,
    onChange,
    error,
    handleSubmit,
  };
}
