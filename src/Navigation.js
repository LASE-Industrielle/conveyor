import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator,} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';


const AppTabNavigator = createBottomTabNavigator(
    {
        Profile: {
            screen: ProfileScreen,
            path: 'Profile',
            navigationOptions: {
            },
        },
    },
    {
        tabBarOptions: {
            showLabel: true,
        },
        initialRouteName: 'Profile',
    },
);

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            path: 'Login',
            navigationOptions: { header: null },
        },
        App: {
            screen: AppTabNavigator,
            path: 'App',
            navigationOptions: { header: null },
        }
    },
    {
        initialRouteName: 'Login',
    },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
