import {StyleSheet} from 'react-native';
import {appColors} from '../constants/appColors';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    paddingHorizontal:14,
    paddingVertical:20
  }
});
