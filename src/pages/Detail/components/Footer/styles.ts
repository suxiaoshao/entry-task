import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function useStyle() {
  const {bottom, right} = useSafeAreaInsets();
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: 56 + bottom / 2,
          flexDirection: 'row',
        },
        left: {
          width: '60%',
          backgroundColor: '#8560A9',
          paddingBottom: bottom / 2,
          flexDirection: 'row',
        },
        leftItem: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        right: {
          width: '40%',
          backgroundColor: '#D5EF7F',
          paddingBottom: bottom / 2,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
        image: {
          width: 24,
          height: 24,
        },
        text: {
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: 14,
          lineHeight: 18,
          color: '#788C36',
          marginLeft: 12,
        },
        commentLeft: {
          flex: 1,
          alignItems: 'center',
          paddingBottom: bottom / 2,
        },
        close: {
          marginLeft: 12,
        },
        input: {
          flex: 1,
          backgroundColor: '#FFFFFF',
          height: 32,
          marginHorizontal: 14,
          borderRadius: 20,
          paddingHorizontal: 19,
          paddingVertical: 7,
        },
        send: {
          width: 56 + right,
          backgroundColor: '#D5EF7F',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: bottom / 2,
        },
      }),
    [bottom, right],
  );
}
