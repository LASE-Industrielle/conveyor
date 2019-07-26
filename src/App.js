import React, {useEffect} from 'react';
import {Alert, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import firebase from 'react-native-firebase';

import AppContainer from './navigation/Navigation';
import NavigationService from './services/NavigationService';
import {initialState, StateProvider} from './context/StateContext';
import storeReducer from './reducers/StoreReducer';

const style = StyleSheet.create({
  globalFont: {
    fontFamily: 'HelveticaNeue'
  }
});

const App = () => {
  let notificationOpenedListener;
  let notificationListener;

  useEffect(() => {
    checkPermission();
    subscribeToTopic('/topics/conveyor1');

  }, []);

  useEffect(() => {
    notificationListener = firebase.notifications().onNotification((notification) => {
      const {title, body} = notification;
       showAlert(title, body);
    });
    return () => notificationListener()
  }, [])

  useEffect(() => {
    notificationOpenedListener = firebase.notifications().onNotificationOpened((notification) => {
      NavigationService.navigate('Notifications')
    });
    return () => notificationListener()
  }, [])



  useEffect(() => {
    firebase.notifications().getInitialNotification().then((notificationOpen) => {
      if (notificationOpen) {
        firebase.notifications().removeDeliveredNotification(notificationOpen.notification.notificationId).then(console.log).catch(c => console.log('catch',c))
        NavigationService.navigate('Notifications')
      }
    })

  },[])

//1
  const checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      getToken();
    } else {
      requestPermission();
    }
  }

  const subscribeToTopic = async (topic) => {
    await firebase.messaging().subscribeToTopic(topic);

  }

//3
  const getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  const requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  const showAlert = (title, body) => {
    Alert.alert(
      `Status: ${body}`,title,
      [
        {text: 'OK', onPress: () => NavigationService.navigate('Notifications')},
      ],
      {cancelable: false},
    );
  }
  return (
    <StateProvider initialState={initialState} reducer={storeReducer} style={style.globalFont}>
      <AppContainer  ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} />
    </StateProvider>
  );
};

export default App;
