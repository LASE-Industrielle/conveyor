import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import lase from '../../assets/img/lase.jpeg';

const appAction1 = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'App' })]
});

const appAction2 = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })]
});

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(token => {
        if (token !== null) {
          axios.defaults.headers.common.Authorization = `Token ${token}`;
          navigation.dispatch(appAction1);
        } else {
          navigation.dispatch(appAction2);
        }
      })
      .catch(() => {
        console.log('something went wrong');
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={lase} style={{ alignSelf: 'center', width: 100, height: 100 }} />
    </View>
  );
};

export default SplashScreen;
