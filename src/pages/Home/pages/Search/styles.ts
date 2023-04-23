import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function useStyles() {
  const {top} = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        form: {
          flex: 1,
          paddingTop: top,
          alignItems: 'center',
          backgroundColor: '#453257',
        },
      }),
    [top],
  );
}
