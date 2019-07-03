import React, {useEffect, useState} from "react";
import {Alert, KeyboardAvoidingView, ScrollView, Dimensions} from "react-native";
import {Button, Container, Content, Input, Item, Left, Right, Spinner, Text} from "native-base";
import {useStateValue} from "../context/StateContext";
import authCall from "../services/AuthService";

import styles from "../Styles";
import {NavigationActions, StackActions} from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

const appAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "App" })]
});

const LoginScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{ auth }, dispatch] = useStateValue();

  useEffect(() => {
    if (__DEV__ === true) {
      setUsername("demo");
      setPassword("codecentriccclabs2");
    }
  }, []);

  useEffect(() => {
    if (auth.token !== "") {
      props.navigation.dispatch(appAction);
    }
  }, [auth.token]);

  useEffect(() => {
    if (auth.errorMessage !== "") {
      Alert.alert(
        "Failed",
        "Failed to login with provided credentials",
        [
          {
            text: "OK",
            onPress: () => (auth.errorMessage = "")
          }
        ],
        { cancelable: false }
      );
    }
  }, [auth.errorMessage]);

  const login = () => {
    authCall(dispatch, username, password);
  };

  if (auth.loading) {
    return (
      <Container>
        <Content contentContainerStyle={styles.default}>
          <Spinner />
        </Content>
      </Container>
    );
  }

  return (
      <ScrollView >
        <KeyboardAvoidingView enabled>
    <Container style={{ backgroundColor: "red", height: Dimensions.get('window').height }}>
      <LinearGradient style={{flex: 1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
          colors={["#83CEA7", "#3A7F78"]}/>
      <Content contentContainerStyle={styles.default}>
        <Item style={{ borderColor: "transparent" }}>
          <Left style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontFamily: "HelveticaNeue", color: "#AAA9A9", fontSize: 24 }}>
              Log In
            </Text>
          </Left>
        </Item>
        <Item style={{ borderColor: "transparent" }}>
          <Left style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontFamily: "HelveticaNeue", color: "#AAA9A9" }}>
              Email
            </Text>
          </Left>
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input
            autoCapitalize="none"
            value={username}
            onChangeText={text => {
              setUsername(text);
            }}
            placeholder="xyz@gmail.com"
            style={styles.placeholder}
            placeholderTextColor={'#AAA9A9'}
          />
        </Item>
        <Item style={{ borderColor: "transparent" }}>
          <Left style={{ marginTop: 20, marginLeft: 20 }}>
            <Text
              style={{
                fontFamily: "HelveticaNeue",
                color: "#AAA9A9"
              }}
            >
              Password
            </Text>
          </Left>
        </Item>
        <Item rounded style={styles.inputItem}>
          <Input
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            placeholder={"\u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A \u002A"}
            style={styles.placeholder}
            placeholderTextColor={'#AAA9A9'}
          />
        </Item>
        <Item
          style={{ justifyContent: "flex-end", borderColor: "transparent" }}
        >
          <Right style={{ marginHorizontal: 15, padding: 7 }}>
            <Text style={{ color: "#02A04E", paddingTop: 10 }}>
              Forgot Password
            </Text>
          </Right>
        </Item>
        <Button block primary onPress={login} style={styles.loginButtonStyle}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontFamily: "HelveticaNeue"
            }}
          >
            LOG IN
          </Text>
        </Button>
        <Item style={{ borderColor: "transparent", marginTop: 30 }}>
          <Text style={{ color: "#AAA9A9" }}>Don't have an account?</Text>
          <Text
            style={{
              color: "#02A04E",
            }}
          >
            &nbsp;Sign up
          </Text>
        </Item>
      </Content>
    </Container>
        </KeyboardAvoidingView>
      </ScrollView>
  );
};

export default LoginScreen;
