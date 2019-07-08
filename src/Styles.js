import { Platform, StatusBar, StyleSheet } from 'react-native';

import { primary, white, greenIconColor, blackTextColor, primaryText, black } from './Colors';

export const elevationShadowStyle = (elevation = 2, shadowOpacity = 0.12) => ({
  elevation,
  shadowColor: black,
  shadowOffset: { width: 0, height: 3 * elevation },
  shadowOpacity,
  shadowRadius: 6 * elevation
});

export default StyleSheet.create({
  default: {
    marginTop: Platform.OS === 'ios' ? 250 : 142,
    marginBottom: Platform.OS === 'ios' ? 50 : 34,
    marginHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderRadius: 8,
    ...(Platform.OS === 'android' && { paddingTop: 30, paddingBottom: 44 })
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  buttonStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    backgroundColor: primary,
    elevation: 2,
    padding: 30
  },
  loginButtonStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: Platform.OS === 'ios' ? 50 : 40,
    backgroundColor: greenIconColor,
    ...elevationShadowStyle(2, 0.16),
    padding: 30
  },
  inputItem: {
    borderColor: blackTextColor,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  placeholder: {
    fontSize: 14,
    marginLeft: 12
  },
  footer: { padding: 10 },
  homeImage: {
    height: 200,
    width: null,
    flex: 1
  },
  notificationImage: {
    width: 50,
    height: 50
  },
  homeHeaderStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5
  },
  behind: {
    zIndex: -100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute'
  },
  icons: {
    color: primary
  },
  arrow: {
    color: primaryText
  },
  buttonAnalyticsStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: primary
  },
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});
