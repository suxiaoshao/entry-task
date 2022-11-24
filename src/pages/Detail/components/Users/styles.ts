import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  content: {flexDirection: 'row'},

  right: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginBottom: 8,
  },
  margin: {
    marginRight: 8,
  },
  divider: {
    marginTop: 4,
  },
});
