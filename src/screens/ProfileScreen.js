import React, { useState } from 'react';
import { Image, StyleSheet, Switch, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { Body, Button, Left, ListItem, Right, Text, Title } from 'native-base';

import { useStore } from '../context/StateContext';
import resetAction from '../navigation/Actions';
import { LoginPath } from '../navigation/Paths';
import { LOGOUT_USER } from '../reducers/Actions';

import { elevationShadowStyle } from '../Styles';
import NotificationIcon from '../icons/NotificationIcon';
import SynchronizationIcon from '../icons/SynchronizationIcon';
import LogoutIcon from '../icons/LogoutIcon';
import ccLogo from '../../assets/img/cc.jpg';
import { blackTextColor, greenIconColor, statusColorRed, white } from '../Colors';
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
    ...fontStyles.fontMedium,
    color: blackTextColor,
  },
  profileItemRedText: {
    ...fontStyles.fontMedium,
    fontWeight: 'bold',
    color: statusColorRed,
  },
});

type Props = {
  navigation: NavigationScreenProp<{}>,
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
        <Title style={styles.profileUsernameText}>{profile.username}</Title>
        <ListItem icon>
          <Left>
            <Button style={styles.iconGreenBackground} />
            <SynchronizationIcon fill={greenIconColor} style={styles.iconStyle} />
          </Left>
          <Body>
            <Text style={styles.profileItemText}>Syncronization</Text>
          </Body>
          <Right>
            <Switch value={sync1} onValueChange={() => setSync1(!sync1)} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={styles.iconGreenBackground} />
            <NotificationIcon
              fill={greenIconColor}
              height={14}
              width={12}
              style={styles.iconStyle}
            />
          </Left>
          <Body>
            <Text style={styles.profileItemText}>Notifications</Text>
          </Body>
          <Right>
            <Switch value={sync2} onValueChange={() => setSync2(!sync2)} />
          </Right>
        </ListItem>
        <ListItem icon onPress={logout}>
          <Left>
            <Button style={styles.iconRedbackground} />
            <LogoutIcon fill={statusColorRed} height={14} width={12} style={styles.iconStyle} />
          </Left>
          <Body>
            <Text style={styles.profileItemRedText}>Logout</Text>
          </Body>
          <Right />
        </ListItem>
      </View>
    </GradientHeaderComponent>
  );
};

export default ProfileScreen;
