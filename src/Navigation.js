import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator,} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ConveyorsListScreen from './screens/ConveyorsListScreen';


const AppTabNavigator = createBottomTabNavigator(
    {
        ConveyorsList: {
            screen: ConveyorsListScreen,
            path: 'ConveyorsList',
            navigationOptions: {
            },
        },
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
        initialRouteName: 'ConveyorsList',
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
