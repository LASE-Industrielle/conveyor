import React from 'react';
import {createAppContainer, createStackNavigator, Header} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import ConveyorsListScreen from './screens/ConveyorsListScreen';
import ConveyorDetailsScreen from "./screens/ConveyorDetailsScreen";
import ScannersAnalyticScreen from "./screens/ScannersAnalyticScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import {TouchableOpacity, Text, View, Platform, StatusBar} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import BackArrowIcon from "./icons/BackArrowIcon";
import NotificationIcon from "./icons/NotificationIcon";
import ProfileIcon from "./icons/ProfileIcon";
import {iconColor} from "./Colors";


const navigationOptions = (backArrowExists, title) => (
    ({ navigation }) => {
        return {
            header: props => Platform.OS === 'ios' ?
                <View style={{
                    height: 102,
                    marginTop: 0,
                    zIndex: -1,
                    position: 'relative',


                    width: '100%',
                    alignItems: 'stretch'
                }}>
                    <View
                    >
                        <StatusBar translucent={true} backgroundColor={'transparent'}/>
                        <LinearGradient
                            colors={["#84CFA8", "#539A88"]}
                        >
                            <Header {...props} />
                        </LinearGradient>
                    </View>
                    <View style={{position: 'absolute', top: 88, opacity: 0.4, borderBottomColor: '#3A7F78',
                        alignSelf: 'stretch', flex: 1, width: '100%', flexDirection: 'row', borderBottomWidth: 1}}/>
                </View>
                :
                <View>
                    <View
                        style={{
                            height: 102,
                            marginTop: 0,
                            zIndex: -1,
                        }}
                    >
                        <StatusBar translucent={true} backgroundColor={'transparent'}/>
                        <LinearGradient
                            colors={["#84CFA8", "#539A88"]}
                        >
                            <Header {...props} />
                        </LinearGradient>
                    </View>
                    <View style={{position: 'absolute', top: 88, opacity: 0.4, borderBottomColor: '#3A7F78',
                        alignSelf: 'stretch', flex: 1, width: '100%', flexDirection: 'row', borderBottomWidth: 1}}/>
                </View>,
            //Heading/title of the header
            headerTitle: <Text style={{marginLeft: 26,
                fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Medium" : "HelveticaNeueMedium",
                fontSize: 18,
                color: iconColor}}>{navigation.getParam('title', title !== null ? title : '')}</Text>,
            //Heading style
            headerStyle: Platform.OS === 'ios' ?
                    {
                        backgroundColor: 'transparent',
                        marginTop: 0,
                        marginBottom: 10,
                        zIndex: -1,
                    }
                    :
                    {
                        backgroundColor: 'transparent',
                        marginTop: 18,
                        marginBottom: 71,
                    },
            //Heading text color
            headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
            headerRight: (
                <View style={{flexDirection: 'row', marginRight: 22}}>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => (navigation.navigate('Notifications'))}>
                        <NotificationIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => (navigation.navigate('Profile'))}>
                        <ProfileIcon />
                    </TouchableOpacity>
                </View>
            ),
            headerLeft: backArrowExists ? (
                <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.goBack()}>
                    <BackArrowIcon/>
                </TouchableOpacity>
            ) : null,
        };
    }
)

const AppStackNavigator = createStackNavigator(
    {
        ConveyorsList: {
            screen: ConveyorsListScreen,
            path: 'ConveyorsList',
            navigationOptions: navigationOptions(false, 'Conveyors'),
        },
        Profile: {
            screen: ProfileScreen,
            path: 'Profile',
            navigationOptions: {
                header: null,
            },
        },
        Notifications: {
            screen: NotificationsScreen,
            path: 'Notifications',
            navigationOptions: {
                header: null,
            },
        },
        ConveyorDetails: {
            screen: ConveyorDetailsScreen,
            path: 'ConveyorDetails',
            navigationOptions: navigationOptions(true),
        },
        ScannersAnalytic: {
            screen: ScannersAnalyticScreen,
            path: 'ScannersAnalytic',
            navigationOptions: {
                header: null,
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
            screen: AppStackNavigator,
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
