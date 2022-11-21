import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  creator: {
    flexDirection: 'row',
    marginTop: 24,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  creatorRight: {
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  creatorName: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#67616D',
  },
  createAt: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#BABABA',
  },
});
