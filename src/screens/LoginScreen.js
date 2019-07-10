// @flow
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions, NavigationScreenProp, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import { useStore } from '../context/StateContext';
import authCall from '../services/AuthService';

import { AppPath } from '../navigation/Paths';
import fontStyles from '../utils/FontUtils';
import { greenIconColor, white } from '../Colors';
import { elevationShadowStyle } from '../Styles';

const appAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: AppPath })],
});

const styles = StyleSheet.create({
  loginText: {
    ...fontStyles.fontMedium,
    color: '#AAA9A9',
    fontSize: 24,
  },
  credentialsText: {
    ...fontStyles.fontMedium,
    color: '#AAA9A9',
    marginTop: 20,
  },
  credentialsTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#AAA9A9',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
  },
  forgotPasswordText: {
    marginTop: 15,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    color: '#02A04E',
  },
  loginButton: {
    color: white,
    fontSize: 14,
    ...fontStyles.fontMedium,
  },
  dontHaveAccountText: {
    marginTop: 30,
    alignSelf: 'center',
    color: '#AAA9A9',
  },
  signUpText: {
    color: '#02A04E',
  },
});

type Props = {
  navigation: NavigationScreenProp<{}>,
};

const LoginScreen = ({ navigation }: Props) => {
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
          navigation.dispatch(appAction);
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
            onPress: () => {
              auth.errorMessage = '';
            },
          },
        ],
        { cancelable: false },
      );
    }
  }, [auth.errorMessage]);

  const login = () => {
    authCall(dispatch, username, password);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <KeyboardAvoidingView
        style={{
          height: 440,
          width: 350,
          backgroundColor: 'transparent',
          margin: 50,
          marginBottom: 20,
          borderRadius: 15,
          padding: 20,
        }}
      >
        <LinearGradient
          style={{
            flex: 1,
            zIndex: 2,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          colors={['#83CEA7', '#3A7F78']}
        />
        <Text style={styles.loginText}>Log In</Text>
        <Text style={styles.credentialsText}>Email</Text>
        <TextInput
          style={styles.credentialsTextInput}
          placeholder="xyz@gmail.com"
          placeholderTextColor="#AAA9A9"
          autoCapitalize="none"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <Text style={styles.credentialsText}>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="\u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A"
          style={styles.credentialsTextInput}
          placeholderTextColor="#AAA9A9"
          autoCapitalize="none"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        <TouchableOpacity
          style={{
            marginTop: 40,
            backgroundColor: greenIconColor,
            ...elevationShadowStyle(2, 0.16),
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          onPress={login}
        >
          <Text style={styles.loginButton}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.dontHaveAccountText}>
          Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
