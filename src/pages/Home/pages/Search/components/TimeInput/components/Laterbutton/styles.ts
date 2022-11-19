import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: '#DADADA',
    width: '100%',
    marginTop: 13.28,
    position: 'relative',
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  triangle: {
    position: 'absolute',
    width: 11,
    height: 11,
    left: 25.5,
    top: -5.5,
    backgroundColor: '#DADADA',
    transform: [{rotate: '45deg'}],
    zIndex: 1,
  },
  icon: {
    width: 12,
    height: 10.33,
  },
  dividerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    width: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  },
  dateContainer: {
    marginLeft: 4,
    height: 18,
    paddingHorizontal: 2,
  },
  activeDateContainer: {
    backgroundColor: '#E5F7A9',
  },
  dateText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: '#8560A9',
  },
});
