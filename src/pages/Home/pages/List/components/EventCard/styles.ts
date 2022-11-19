import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  creator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    marginLeft: 8,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#67616D',
  },
  content: {
    flexDirection: 'row',
  },
  contentLeft: {
    flex: 1,
  },
  titleText: {
    marginTop: 8,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21,
    color: '#453257',
  },
  image: {
    height: 64,
    width: 64,
    marginLeft: 8,
  },
  time: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
  },
  clockIcon: {
    width: 12,
    height: 12,
  },
  timeText: {
    marginLeft: 5,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#8560A9',
  },
  description: {
    marginTop: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#67616D',
  },
  action: {
    marginTop: 12,
    flexDirection: 'row',
  },
  like: {
    marginLeft: 30,
  },
});
