import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabContainer: {
    height: 48,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E8E8E8',
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: '#8C8C8C',
    marginLeft: 8,
  },
  tabItemTextActive: {
    color: '#AECB4F',
  },
  tabItemIcon: {
    width: 20,
    height: 20,
  },
  divider: {
    width: 1,
    height: 11.12,
    backgroundColor: '#E8E8E8',
  },
});
