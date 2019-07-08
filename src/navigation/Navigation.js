import React from 'react';
import { TouchableOpacity, Text, View, Platform, StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator, Header } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import {
  ConveyorsListPath,
  ProfilePath,
  NotificationsPath,
  ConveyorDetailsPath,
  ScannerAnalyticsPath,
  SplashPath,
  LoginPath,
  AppPath
} from './Paths';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SplashScreen from '../screens/SplashScreen';
import ConveyorsListScreen from '../screens/ConveyorsListScreen';
import ConveyorDetailsScreen from '../screens/ConveyorDetailsScreen';
import ScannerAnalyticsScreen from '../screens/ScannerAnalyticsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

import BackArrowIcon from '../icons/BackArrowIcon';
import NotificationIcon from '../icons/NotificationIcon';
import ProfileIcon from '../icons/ProfileIcon';
import fontStyles from '../utils/FontUtils';
import { iconColor, bgGradientStart, bgGradientEnd, bottomBorder } from '../Colors';

const navigationOptions = (backArrowExists, title) => ({ navigation }) => {
  return {
    header: props =>
      Platform.OS === 'ios' ? (
        <View
          style={{
            height: 102,
            marginTop: 0,
            zIndex: -1,
            position: 'relative',

            width: '100%',
            alignItems: 'stretch'
          }}
        >
          <View>
            <StatusBar translucent backgroundColor="transparent" />
            <Header {...props} />
          </View>
          <View
            style={{
              position: 'absolute',
              top: 88,
              opacity: 0.4,
              borderBottomColor: bottomBorder,
              alignSelf: 'stretch',
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              borderBottomWidth: 1
            }}
          />
        </View>
      ) : (
        <View>
          <View
            style={{
              height: 102,
              marginTop: 0,
              zIndex: -1
            }}
          >
            <StatusBar translucent backgroundColor="transparent" />
            <LinearGradient colors={[bgGradientStart, bgGradientEnd]}>
              <Header {...props} />
            </LinearGradient>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 88,
              opacity: 0.4,
              borderBottomColor: bottomBorder,
              alignSelf: 'stretch',
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              borderBottomWidth: 1
            }}
          />
        </View>
      ),
    // Heading/title of the header
    headerTitle: (
      <Text
        style={{
          marginLeft: Platform.OS === 'ios' ? 0 : 26,
          ...fontStyles.fontMedium,
          fontSize: 18,
          color: iconColor
        }}
      >
        {navigation.getParam('title', title !== null ? title : '')}
      </Text>
    ),
    // Heading style
    headerStyle:
      Platform.OS === 'ios'
        ? {
            backgroundColor: 'transparent',
            marginTop: 0,
            marginBottom: 10,
            zIndex: -1
          }
        : {
            backgroundColor: 'transparent',
            marginTop: 18,
            marginBottom: 71
          },
    // Heading text color
    headerTintColor: navigation.getParam('HeaderTintColor', iconColor),
    headerRight: (
      <View style={{ flexDirection: 'row', marginRight: 8 }}>
        <TouchableOpacity
          style={{ paddingRight: 5, paddingLeft: 14 }}
          onPress={() => navigation.navigate('Notifications')}
        >
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingRight: 14, paddingLeft: 5 }} onPress={() => navigation.navigate('Profile')}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: backArrowExists ? (
      <TouchableOpacity style={{ padding: 20, paddingTop: 15, paddingBottom: 15 }} onPress={() => navigation.goBack()}>
        <BackArrowIcon />
      </TouchableOpacity>
    ) : null,
    headerTransparent: Platform.OS === 'ios'
  };
};

const AppStackNavigator = createStackNavigator(
  {
    ConveyorsList: {
      screen: ConveyorsListScreen,
      path: ConveyorDetailsPath,
      navigationOptions: navigationOptions(false, 'Conveyors')
    },
    Profile: {
      screen: ProfileScreen,
      path: ProfilePath,
      navigationOptions: navigationOptions(true, 'Profile')
    },
    Notifications: {
      screen: NotificationsScreen,
      path: NotificationsPath,
      navigationOptions: navigationOptions(true, 'Notifications')
    },
    ConveyorDetails: {
      screen: ConveyorDetailsScreen,
      path: ConveyorDetailsPath,
      navigationOptions: navigationOptions(true)
    },
    ScannerAnalytics: {
      screen: ScannerAnalyticsScreen,
      path: ScannerAnalyticsPath,
      navigationOptions: navigationOptions(true, 'Analytics')
    }
  },
  {
    tabBarOptions: {
      showLabel: true
    },
    initialRouteName: ConveyorsListPath
  }
);

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      path: SplashPath,
      navigationOptions: { header: null }
    },
    Login: {
      screen: LoginScreen,
      path: LoginPath,
      navigationOptions: { header: null }
    },
    App: {
      screen: AppStackNavigator,
      path: AppPath,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: SplashPath
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
