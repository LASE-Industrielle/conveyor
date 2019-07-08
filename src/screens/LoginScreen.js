import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Button, Container, Content, Input, Item, Left, Right, Spinner, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions, StackActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import { useStore } from '../context/StateContext';
import authCall from '../services/AuthService';

import styles from '../Styles';
import { greenIconColor, bottomBorder } from '../Colors';

const appAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'App' })]
});

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [{ auth }, dispatch] = useStore();

  useEffect(() => {
    if (__DEV__ === true) {
      setUsername('demo');
      setPassword('codecentriccclabs2');
    }
  }, []);

  useEffect(() => {
    if (auth.token !== '' && auth.token !== undefined) {
      AsyncStorage.setItem('token', auth.token)
        .then(() => {
          props.navigation.dispatch(appAction);
        })
        .catch(() => {
          console.log('failed to set token');
        });
    }
  }, [auth.token]);

  useEffect(() => {
    if (auth.errorMessage !== '') {
      Alert.alert(
        'Failed',
        'Failed to login with provided credentials',
        [
          {
            text: 'OK',
            onPress: () => (auth.errorMessage = '')
          }
        ],
        { cancelable: false }
      );
    }
  }, [auth.errorMessage]);

  const login = () => {
    authCall(dispatch, username, password);
  };

  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" />
      <KeyboardAvoidingView enabled>
        <Container style={{ backgroundColor: 'red', height: Dimensions.get('window').height }}>
          <LinearGradient
            style={{ flex: 1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            colors={['#83CEA7', bottomBorder]}
          />

          <Content contentContainerStyle={styles.default}>
            {auth.loading || (!auth.loading && auth.token !== '') ? <Spinner /> : null}
            {!auth.loading && auth.token === '' ? (
              <Item style={{ borderColor: 'transparent' }}>
                <Left style={{ marginTop: 20, marginLeft: 20 }}>
                  <Text style={{ fontFamily: 'HelveticaNeue', color: '#AAA9A9', fontSize: 24 }}>Log In</Text>
                </Left>
              </Item>
            ) : null}
            {!auth.loading && auth.token === '' ? (
              <Item style={{ borderColor: 'transparent' }}>
                <Left style={{ marginTop: 20, marginLeft: 20 }}>
                  <Text style={{ fontFamily: 'HelveticaNeue', color: '#AAA9A9' }}>Email</Text>
                </Left>
              </Item>
            ) : null}
            {!auth.loading && auth.token === '' ? (
              <Item rounded style={styles.inputItem}>
                <Input
                  autoCapitalize="none"
                  value={username}
                  onChangeText={text => {
                    setUsername(text);
                  }}
                  placeholder="xyz@gmail.com"
                  style={styles.placeholder}
                  placeholderTextColor="#AAA9A9"
                />
              </Item>
            ) : null}
            {!auth.loading && auth.token === '' ? (
              <Item style={{ borderColor: 'transparent' }}>
                <Left style={{ marginTop: 20, marginLeft: 20 }}>
                  <Text
                    style={{
                      fontFamily: 'HelveticaNeue',
                      color: '#AAA9A9'
                    }}
                  >
                    Password
                  </Text>
                </Left>
              </Item>
            ) : null}
            {!auth.loading && auth.token === '' ? (
              <Item rounded style={styles.inputItem}>
                <Input
                  autoCapitalize="none"
                  secureTextEntry
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                  placeholder={'\u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A'}
                  style={styles.placeholder}
                  placeholderTextColor="#AAA9A9"
                />
              </Item>
            ) : null}
            {!auth.loading && auth.token === '' ? (
              <Item style={{ justifyContent: 'flex-end', borderColor: 'transparent' }}>
                <Right style={{ marginHorizontal: 15, padding: 7 }}>
                  <Text style={{ color: greenIconColor, paddingTop: 10 }}>Forgot Password</Text>
                </Right>
              </Item>
            ) : null}
            {!auth.loading && auth.token === '' ? (
              <Button block primary onPress={login} style={styles.loginButtonStyle}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: 'HelveticaNeue'
                  }}
                >
                  LOG IN
                </Text>
              </Button>
            ) : null}
            {!auth.loading && auth.token === '' ? (
              <Item style={{ borderColor: 'transparent', marginTop: 30 }}>
                <Text style={{ color: '#AAA9A9' }}>Don't have an account?</Text>
                <Text
                  style={{
                    color: greenIconColor
                  }}
                >
                  &nbsp;Sign up
                </Text>
              </Item>
            ) : null}
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;
