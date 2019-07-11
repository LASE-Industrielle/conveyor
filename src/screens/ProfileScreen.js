import React, { useState } from 'react';
import { Image, StyleSheet, Switch, View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import { useStore } from '../context/StateContext';
import resetAction from '../navigation/Actions';
import { LoginPath } from '../navigation/Paths';
import { LOGOUT_USER } from '../reducers/Actions';

import { elevationShadowStyle } from '../Styles';
import NotificationIcon from '../icons/NotificationIcon';
import SynchronizationIcon from '../icons/SynchronizationIcon';
import LogoutIcon from '../icons/LogoutIcon';
import ccLogo from '../../assets/img/cc.jpg';
import { blackTextColor, greenIconColor, statusColorRed, white, black } from '../Colors';
import GradientHeaderComponent from '../components/GradientHeaderComponent';
import fontStyles from '../utils/FontUtils';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    zIndex: 2,
    margin: 20,
    marginTop: 0,
    backgroundColor: white,
    borderRadius: 8,
    padding: 10,
    fontSize: 13,
    bottom: 32,
    ...elevationShadowStyle(2, 0.12),
  },
  profileImage: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginTop: 30,
  },
  profileUsernameText: {
    paddingBottom: 15,
    alignSelf: 'center',
  },
  iconGreenBackground: {
    backgroundColor: greenIconColor,
    opacity: 0.08,
  },
  iconRedbackground: {
    backgroundColor: statusColorRed,
    opacity: 0.1,
  },
  iconStyle: {
    opacity: 1,
    zIndex: 100,
    position: 'absolute',
    left: 8,
  },
  profileItemText: {
    alignSelf: 'center',
    ...fontStyles.fontMedium,
    color: blackTextColor,
  },
  profileItemRedText: {
    ...fontStyles.fontMedium,
    fontWeight: 'bold',
    color: statusColorRed,
  },
  list: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  profileListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconTextWrapper: { flexDirection: 'row' },
  icon: { padding: 7, margin: 7, borderRadius: 5, alignSelf: 'center' },
  switch: {
    alignSelf: 'flex-end',
  },
});

type Props = {
  navigation: NavigationScreenProp<{}>
};

const ProfileScreen = ({ navigation }: Props) => {
  const [{ profile }, dispatch] = useStore();

  const [sync1, setSync1] = useState(true);
  const [sync2, setSync2] = useState(false);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await dispatch({ type: LOGOUT_USER });
    await navigation.dispatch(resetAction(LoginPath));
  };

  return (
    <GradientHeaderComponent>
      <View style={styles.view}>
        <Image source={ccLogo} style={styles.profileImage} />
        <Text style={styles.profileUsernameText}>{profile.username}</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.iconTextWrapper}>
              <SynchronizationIcon fill={black} height={14} width={14} style={styles.icon} />
              <Text style={styles.profileItemText}>Syncronization</Text>
            </View>
            <Switch value={sync1} style={styles.switch} onValueChange={() => setSync1(!sync1)} />
          </View>
          <View style={styles.listItem}>
            <View style={styles.iconTextWrapper}>
              <NotificationIcon fill={black} height={14} width={14} style={styles.icon} />
              <Text style={styles.profileItemText}>Notifications</Text>
            </View>
            <Switch value={sync2} style={styles.switch} onValueChange={() => setSync2(!sync2)} />
          </View>
          <TouchableOpacity style={styles.profileListItem} onPress={logout}>
            <LogoutIcon fill={statusColorRed} height={14} width={14} style={styles.icon} />
            <Text style={styles.profileItemRedText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientHeaderComponent>
  );
};

export default ProfileScreen;
