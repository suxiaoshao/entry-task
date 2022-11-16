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
          paddingTop: top,
          alignItems: 'center',
          backgroundColor: '#453257',
        },
        title: {
          paddingBottom: 2,
          borderBottomWidth: 1,
          borderColor: '#8560A9',
        },
        titleText: {
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: 12,
          lineHeight: 15,
          color: '#AC8EC9',
        },
        timeList: {
          marginTop: 3,
          paddingLeft: 8,
          paddingRight: 23,
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
        channelTitle: {
          marginTop: 24,
        },
        channelList: {
          flexDirection: 'row',
          marginTop: 4,
          paddingLeft: 4,
          paddingRight: 16,
          flexWrap: 'wrap',
        },
        channelBox: {
          height: 24,
          borderRadius: 12,
          paddingLeft: 7.5,
          paddingRight: 10.5,
          paddingTop: 4,
          paddingBottom: 5,
          marginLeft: 12,
          marginTop: 9,
        },
        channelText: {
          color: '#FFFFFF',
        },
      }),
    [top],
  );
}
