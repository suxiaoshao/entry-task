import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useSize} from './hooks';

export default function useStyles() {
  const {
    size: {width},
    onLayout,
  } = useSize();
  const margin = useMemo(() => (width - 7 * 24) / 6, [width]);
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          marginTop: 24,
          paddingHorizontal: 16,
        },
        content: {flexDirection: 'row'},
        right: {
          flex: 1,
        },
        rightLine: {
          flexDirection: 'row',
        },
        image: {
          width: 24,
          height: 24,
          borderRadius: 12,
          marginBottom: 8,
        },
        margin: {
          marginLeft: margin,
        },
        divider: {
          marginTop: 4,
        },
      }),
    [margin],
  );
  return {styles, onLayout};
}
