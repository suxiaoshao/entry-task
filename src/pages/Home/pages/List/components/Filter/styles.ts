import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: '#FAF9FC',
    paddingLeft: 27,
    paddingRight: 15,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  count: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#8560A9',
  },
  clearContainer: {
    height: 24,
    backgroundColor: '#D5EF7F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  clearText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 13,
    color: '#67616D',
  },
  filter: {
    marginTop: 6,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#67616D',
  },
});
