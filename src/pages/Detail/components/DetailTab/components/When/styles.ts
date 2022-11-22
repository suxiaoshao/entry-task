import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    marginTop: 16,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 13.78,
    width: 16,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    color: '#67616D',
    marginLeft: 4,
  },
  divider: {
    backgroundColor: '#E8E8E8',
    width: 1,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 6,
  },
  hour: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 40,
    color: '#AECB4F',
  },
  amAndPm: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#AECB4F',
    marginLeft: 4,
  },
});
