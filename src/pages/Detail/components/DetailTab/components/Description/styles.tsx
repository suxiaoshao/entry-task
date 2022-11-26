import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 10,
    height: 180,
    overflow: 'hidden',
    position: 'relative',
  },
  containerShowMore: {
    height: 'auto',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#67616D',
  },
  tooLongBackground: {
    height: 57,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    width: 66,
    height: 24,
    backgroundColor: '#D5EF7F',
    borderRadius: 12,
    right: 16,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 13,
    color: '#67616D',
  },
});
