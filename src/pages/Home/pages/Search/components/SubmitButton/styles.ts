import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BABABA',
  },
  buttonActive: {
    backgroundColor: '#D5EF7F',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentImage: {
    width: 16,
    height: 16,
  },
  contentText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#666666',
    marginLeft: 4,
  },
  contentTextActive: {
    color: '#453257',
  },
  activeText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
    color: '#8560A9',
  },
});
