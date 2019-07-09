import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createAppContainer, createStackNavigator, Header } from 'react-navigation';

import {
  AppPath,
  ConveyorDetailsPath,
  ConveyorsListPath,
  LoginPath,
  NotificationsPath,
  ProfilePath,
  ScannerAnalyticsPath,
  SplashPath
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
import { iconColor } from '../Colors';

const styles = StyleSheet.create({
  headerTitleText: {
    marginLeft: Platform.OS === 'ios' ? 0 : 26,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
    fontSize: 18,
    color: iconColor
  },
  headerRightView: {
    flexDirection: 'row',
    marginRight: 8
  },
  notificationIconPadding: {
    paddingRight: 5,
    paddingLeft: 14
  },
  profileIconPadding: {
    paddingRight: 14,
    paddingLeft: 5
  },
  backArrowPadding: {
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15
  }
});

const navigationOptions = (backArrowExists, title) => ({ navigation }) => {
  return {
    header: props => (
      <View>
        <StatusBar translucent backgroundColor="transparent" />
        <Header {...props} />
      </View>
    ),
    // Heading/title of the header
    headerTitle: (
      <Text style={styles.headerTitleText}>{navigation.getParam('title', title !== null ? title : '')}</Text>
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
      <View style={styles.headerRightView}>
        <TouchableOpacity style={styles.notificationIconPadding} onPress={() => navigation.navigate(NotificationsPath)}>
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileIconPadding} onPress={() => navigation.navigate(ProfilePath)}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>
    ),
    headerLeft: backArrowExists ? (
      <TouchableOpacity style={styles.backArrowPadding} onPress={() => navigation.goBack()}>
        <BackArrowIcon />
      </TouchableOpacity>
    ) : null,
    headerTransparent: true
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
    initialRouteName: LoginPath
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
