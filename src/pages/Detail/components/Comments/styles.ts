import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  divider: {
    height: 16,
  },
  item: {
    flexDirection: 'row',
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  contentTop: {
    flexDirection: 'row',
  },
  name: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#8560A9',
  },
  time: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
    color: '#BABABA',
    marginLeft: 13,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#67616D',
  },
  reply: {
    marginLeft: 12,
  },
});
