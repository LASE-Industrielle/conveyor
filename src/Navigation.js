import React from 'react';
import { createAppContainer, createStackNavigator, Header } from 'react-navigation';

import { TouchableOpacity, Text, View, Platform, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SplashScreen from './screens/SplashScreen';
import ConveyorsListScreen from './screens/ConveyorsListScreen';
import ConveyorDetailsScreen from './screens/ConveyorDetailsScreen';
import ScannersAnalyticScreen from './screens/ScannersAnalyticScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import BackArrowIcon from './icons/BackArrowIcon';
import NotificationIcon from './icons/NotificationIcon';
import ProfileIcon from './icons/ProfileIcon';
import { iconColor } from './Colors';

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
              borderBottomColor: '#3A7F78',
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
            <LinearGradient colors={['#84CFA8', '#539A88']}>
              <Header {...props} />
            </LinearGradient>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 88,
              opacity: 0.4,
              borderBottomColor: '#3A7F78',
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
          fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
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
    headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
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
      path: 'ConveyorsList',
      navigationOptions: navigationOptions(false, 'Conveyors')
    },
    Profile: {
      screen: ProfileScreen,
      path: 'Profile',
      navigationOptions: navigationOptions(true, 'Profile')
    },
    Notifications: {
      screen: NotificationsScreen,
      path: 'Notifications',
      navigationOptions: navigationOptions(true, 'Notifications')
    },
    ConveyorDetails: {
      screen: ConveyorDetailsScreen,
      path: 'ConveyorDetails',
      navigationOptions: navigationOptions(true)
    },
    ScannersAnalytic: {
      screen: ScannersAnalyticScreen,
      path: 'ScannersAnalytic',
      navigationOptions: navigationOptions(true, 'Analytics')
    }
  },
  {
    tabBarOptions: {
      showLabel: true
    },
    initialRouteName: 'ConveyorsList'
  }
);

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      path: 'Splash',
      navigationOptions: { header: null }
    },
    Login: {
      screen: LoginScreen,
      path: 'Login',
      navigationOptions: { header: null }
    },
    App: {
      screen: AppStackNavigator,
      path: 'App',
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: 'Splash'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
