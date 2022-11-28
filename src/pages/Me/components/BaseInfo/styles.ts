import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 72,
    height: 72,
    marginTop: 36,
  },
  username: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
    color: '#67616D',
    marginTop: 25,
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  emailIcon: {
    width: 16,
    height: 13,
  },
  emailText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#8560A9',
    marginLeft: 6,
  },
});
