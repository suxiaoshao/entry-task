import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function useStyles() {
  const {top} = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    backgroundImage: {
      flex: 1,
    },
    button: {
      backgroundColor: '#D5EF7F',
      height: 64,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20,
      alignItems: 'flex-end',
      color: '#453257',
    },
    backgroundColor: {
      flex: 1,
      opacity: 0.95,
      backgroundColor:
        'linear-gradient(180deg, rgba(133, 96, 169, 0.7) 0%, #8560A9 100%)',
      alignItems: 'center',
    },
    desc: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20,
      color: '#D5EF7F',
      marginTop: 69 + top,
    },
    title: {
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 30,
      color: '#D5EF7F',
      marginTop: 17,
    },
    logo: {
      height: 64,
      width: 64,
      marginTop: 37,
    },
  });
}
