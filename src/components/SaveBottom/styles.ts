import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function useStyles() {
  const {bottom} = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          marginTop: bottom,
        },
      }),
    [bottom],
  );
}
