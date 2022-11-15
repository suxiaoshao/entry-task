import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function useStyles() {
  const {top} = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      height: 40 + top,
      paddingTop: top,
      backgroundColor: '#8560A9',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    search: {
      height: 24,
      width: 24,
      marginLeft: 16,
    },
    logo: {
      height: 24,
      width: 20,
    },
    avatar: {
      height: 24,
      width: 24,
      marginRight: 14,
      borderRadius: 12,
    },
  });
}
