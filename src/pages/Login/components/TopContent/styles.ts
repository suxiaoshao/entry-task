import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function useStyles() {
  const {top} = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        desc: {
          fontWeight: '600',
          fontSize: 16,
          lineHeight: 20,
          color: '#D5EF7F',
          marginTop: 69,
        },
        titleText: {
          fontWeight: '700',
          fontSize: 24,
          lineHeight: 30,
          color: '#D5EF7F',
          marginTop: 17,
        },
        logo: {
          width: 37.46,
          height: 43,
        },
        logoContainer: {
          marginTop: 37,
          width: 64,
          height: 64,
          justifyContent: 'center',
          alignItems: 'center',
        },
        logoBorder: {
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#D5EF7F',
          borderWidth: 1,
          borderRadius: 30,
        },
        logoBorderOpacity: {
          position: 'absolute',
          width: 64,
          height: 64,
          opacity: 0.3,
          borderColor: '#D5EF7F',
          borderWidth: 1,
          borderRadius: 32,
        },
        topContent: {
          flex: 1,
          marginTop: top,
          alignItems: 'center',
          width: '100%',
        },
      }),
    [top],
  );
}
