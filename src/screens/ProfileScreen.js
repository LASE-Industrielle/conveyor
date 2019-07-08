import React, { useState } from 'react';
import { Image, Platform, Switch, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Body, Button, Left, ListItem, Right, Text, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { useStore } from '../context/StateContext';
import resetAction from '../utils/NavigationUtils';
import { LOGOUT_USER } from '../reducers/Actions';

import { elevationShadowStyle } from '../Styles';
import NotificationIcon from '../icons/NotificationIcon';
import SynchronizationIcon from '../icons/SynchronizationIcon';
import LogoutIcon from '../icons/LogoutIcon';
import ccLogo from '../../assets/img/cc.jpg';
import { bgColor, statusColorRed, greenIconColor, blackTextColor, bgGradientStart, bgGradientEnd } from '../Colors';

const ProfileScreen = props => {
  const [{ profile }, dispatch] = useStore();

  const [sync1, setSync1] = useState(true);
  const [sync2, setSync2] = useState(false);

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await dispatch({ type: LOGOUT_USER });
    await props.navigation.dispatch(resetAction);
  };

  return (
    <View style={{ backgroundColor: 'transparent', width: '100%', height: '100%' }}>
      <View
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? 0 : 32,
          zIndex: 1,
          backgroundColor: bgColor,
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        {Platform.OS === 'ios' ? (
          <LinearGradient style={{ height: 134 }} colors={[bgGradientStart, bgGradientEnd]} />
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
          zIndex: 2,
          marginTop: Platform.OS === 'ios' ? 102 : 0,
          margin: 20,
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 10,
          fontSize: 13,
          ...elevationShadowStyle(2, 0.12)
        }}
      >
        <Image
          source={ccLogo}
          style={{ alignSelf: 'center', width: 80, height: 80, borderRadius: 80 / 2, marginTop: 30 }}
        />
        <Title style={{ paddingBottom: 15 }}>{profile.username}</Title>
        <ListItem icon>
          <Left>
            <Button
              style={{
                backgroundColor: greenIconColor,
                opacity: 0.08
              }}
              textStyle={{}}
            />
            <SynchronizationIcon
              fill={greenIconColor}
              style={{ opacity: 1, zIndex: 100, position: 'absolute', left: 8 }}
            />
          </Left>
          <Body>
            <Text style={{ color: blackTextColor }}>Syncronization</Text>
          </Body>
          <Right>
            <Switch value={sync1} onValueChange={() => setSync1(!sync1)} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button
              style={{
                backgroundColor: greenIconColor,
                opacity: 0.08
              }}
            />
            <NotificationIcon
              fill={greenIconColor}
              height={14}
              width={12}
              style={{ opacity: 1, zIndex: 100, position: 'absolute', left: 8 }}
            />
          </Left>
          <Body>
            <Text style={{ color: blackTextColor }}>Notifications</Text>
          </Body>
          <Right>
            <Switch value={sync2} onValueChange={() => setSync2(!sync2)} />
          </Right>
        </ListItem>
        <ListItem icon onPress={logout}>
          <Left>
            <Button
              style={{
                backgroundColor: statusColorRed,
                opacity: 0.1
              }}
            />
            <LogoutIcon
              fill={statusColorRed}
              height={14}
              width={12}
              style={{ opacity: 1, zIndex: 100, position: 'absolute', left: 8 }}
            />
          </Left>
          <Body>
            <Text
              style={{
                fontWeight: 'bold',
                color: statusColorRed
              }}
            >
              Logout
            </Text>
          </Body>
          <Right />
        </ListItem>
      </View>
    </View>
  );
};

export default ProfileScreen;
