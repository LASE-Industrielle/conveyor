import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import lase from '../../assets/img/lase.jpeg';
import { AppPath, LoginPath } from '../navigation/Paths';
import resetAction from '../navigation/Actions';

const styles = StyleSheet.create({
  splashContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageStyle: { width: 100, height: 100 },
});

type Props = {
  navigation: NavigationScreenProp<{}>,
};

const SplashScreen = ({ navigation }: Props) => {
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token').catch(() => {
      navigation.dispatch(resetAction(LoginPath));
    });
    if (token !== null) {
      axios.defaults.headers.common.Authorization = `Token ${token}`;
      navigation.dispatch(resetAction(AppPath));
    } else {
      navigation.dispatch(resetAction(LoginPath));
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image source={lase} style={styles.imageStyle} />
    </View>
  );
};

export default SplashScreen;
