import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: '#8560A9',
  },
  titleText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#AC8EC9',
  },
  channelTitle: {
    marginTop: 21,
  },
  channelList: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: 4,
    paddingRight: 16,
    flexWrap: 'wrap',
  },
  channelBox: {
    height: 24,
    borderRadius: 12,
    paddingLeft: 7.5,
    paddingRight: 10.5,
    marginLeft: 12,
    marginTop: 9,
  },
  channelText: {
    color: '#FFFFFF',
  },
  containerSelected: {
    backgroundColor: '#E5F7A9',
    borderColor: '#E5F7A9',
  },
  textSelected: {
    color: '#453257',
  },
});
