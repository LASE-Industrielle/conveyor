import React, {useEffect} from 'react';
import {Alert, AsyncStorage, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';

import AppContainer from './navigation/Navigation';
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
  let messageListener;


  useEffect(() => {
    checkPermission();
    subscribeToTopic('/topics/conveyor1');
    // createNotificationListeners();

    // return () => createNotificationListeners();

  }, []);

  // useEffect(() => {
  //   notificationOpenedListener = firebase.notifications().onNotificationOpened((notification) => {
  //     const {title, body} = notification;
  //     showAlert(title, body);
  //   });
  //
  //   return () => notificationOpenedListener()
  // }, [])

  useEffect(() => {
    notificationListener = firebase.notifications().onNotification((notification) => {
      console.log(notification)
      const {title, body} = notification;
      showAlert(title, body);
    });
    return () => notificationListener()
  }, [])



  useEffect(() => {
    firebase.notifications().getInitialNotification().then((notificationOpen) => {
      if (notificationOpen) {
        console.log('App closed ', notificationOpen)
        const {data:{title,body}} = notificationOpen.notification;
        firebase.notifications().removeDeliveredNotification(notificationOpen.notification.notificationId).then(console.log).catch(c => console.log('catch',c))
        showAlert(title, body);
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

//2
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

  // const createNotificationListeners = async () => {
  //   /*
  // * Triggered when a particular notification has been received in foreground
  // * */
  //   notificationListener = firebase.notifications().onNotification((notification) => {
  //     console.log(notification)
  //     const {title, body} = notification;
  //     showAlert(title, body);
  //   });
  //
  //   /*
  //   * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
  //   * */
  //   notificationOpenedListener = firebase.notifications().onNotificationDisplayed((notificationOpen) => {
  //     console.log(notificationOpen, ' openedListener');
  //     const {title, body, data} = notificationOpen.notification;
  //     showAlert(title, data);
  //   });
  //
  //   /*
  // * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
  // * */
  //   // const notificationOpen = await firebase.notifications().getInitialNotification();
  //   // if (notificationOpen) {
  //   //   console.log('App closed ', notificationOpen)
  //   //   const { title, body } = notificationOpen.notification;
  //   //   showAlert(title, body);
  //   // }
  //   /*
  //   * Triggered for data only payload in foreground
  //   * */
  //   messageListener = firebase.messaging().onMessage((message) => {
  //     //process data message
  //     console.log(JSON.stringify(message));
  //   });
  // }

  const showAlert = (title, body) => {
    Alert.alert(
      title, body,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
  return (
    <StateProvider initialState={initialState} reducer={storeReducer} style={style.globalFont}>
      <AppContainer/>
    </StateProvider>
  );
};

export default App;
