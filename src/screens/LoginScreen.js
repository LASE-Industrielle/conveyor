// @flow
import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationActions, NavigationScreenProp, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import { useStore } from '../context/StateContext';
import authCall from '../services/AuthService';

import { AppPath } from '../navigation/Paths';
import fontStyles from '../utils/FontUtils';
import { greenIconColor, greyText, transparentColor, white } from '../Colors';
import { elevationShadowStyle } from '../Styles';
import GradientBackground from '../components/GradientBackground';

const appAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: AppPath })]
});

const styles = StyleSheet.create({
  loginText: {
    ...fontStyles.fontMedium,
    color: greyText,
    fontSize: 24
  },
  credentialsText: {
    ...fontStyles.fontMedium,
    color: greyText,
    marginTop: 20
  },
  credentialsTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: greyText,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10
  },
  forgotPasswordText: {
    marginTop: 15,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    color: greenIconColor
  },
  loginButton: {
    color: white,
    fontSize: 14,
    ...fontStyles.fontMedium
  },
  loginTouchableOpacity: {
    marginTop: 40,
    backgroundColor: greenIconColor,
    ...elevationShadowStyle(2, 0.24),
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  dontHaveAccountText: {
    marginTop: 30,
    alignSelf: 'center',
    color: greyText
  },
  signUpText: {
    color: greenIconColor
  },
  keyboardAwoidingView: {
    height: 440,
    backgroundColor: transparentColor,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    alignSelf: 'stretch',
    bottom: 510
  },
  loginView: {
    backgroundColor: white,
    padding: 20
  }
});

type Props = {
  navigation: NavigationScreenProp<{}>
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
            }
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
    <GradientBackground>
      <KeyboardAvoidingView style={styles.keyboardAwoidingView} behavior={Platform.OS === 'ios' ? 'position' : null}>
        <View style={styles.loginView}>
          <Text style={styles.loginText}>Log In</Text>
          <Text style={styles.credentialsText}>Email</Text>
          <TextInput
            style={styles.credentialsTextInput}
            placeholder="xyz@gmail.com"
            placeholderTextColor={greyText}
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <Text style={styles.credentialsText}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder={'\u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A'}
            style={styles.credentialsTextInput}
            placeholderTextColor={greyText}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          <TouchableOpacity style={styles.loginTouchableOpacity} onPress={login}>
            <Text style={styles.loginButton}>LOG IN</Text>
          </TouchableOpacity>
          <Text style={styles.dontHaveAccountText}>
            Don&apos;t have an account? <Text style={styles.signUpText}>Sign up</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export default LoginScreen;
