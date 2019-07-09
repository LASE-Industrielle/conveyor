import { Platform, StyleSheet } from 'react-native';

const fontStyles = StyleSheet.create({
  fontMedium: {
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium'
  },
  fontBold: {
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'HelveticaNeueBold'
  }
});

export default fontStyles;
