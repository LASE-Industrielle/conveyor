import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ConveyorsListScreen from "./screens/ConveyorsListScreen";
import ConveyorDetailsScreen from "./screens/ConveyorDetailsScreen";
import ScannersAnalyticScreen from "./screens/ScannersAnalyticScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

const AppStackNavigator = createStackNavigator(
  {
    ConveyorsList: {
      screen: ConveyorsListScreen,
      path: "ConveyorsList",
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: ProfileScreen,
      path: "Profile",
      navigationOptions: {
        header: null
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      path: "Notifications",
      navigationOptions: {
        header: null
      }
    },
    ConveyorDetails: {
      screen: ConveyorDetailsScreen,
      path: "ConveyorDetails",
      navigationOptions: {
        header: null
      }
    },
    ScannersAnalytic: {
      screen: ScannersAnalyticScreen,
      path: "ScannersAnalytic",
      navigationOptions: {
        header: null
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true
    },
    initialRouteName: "ScannersAnalytic"
  }
);

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      path: "Login",
      navigationOptions: { header: null }
    },
    App: {
      screen: AppStackNavigator,
      path: "App",
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "App"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
