import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  Button,
  Container,
  Content,
  Input,
  Item,
  Spinner,
  Text,
  Left,
  Right
} from "native-base";
import { useStateValue } from "../context/StateContext";
import authCall from "../services/AuthService";

import styles from "../Styles";
import laseLogo from "../../assets/img/lase.jpeg";
import {Header, NavigationActions, StackActions} from "react-navigation";
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
    <Container style={{ backgroundColor: "transparent" }}>
      <LinearGradient style={{flex: 1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
          colors={["#83CEA7", "#3A7F78"]}/>
      <Content contentContainerStyle={styles.default}>
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
            placeholder="Username"
            style={styles.placeholder}
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
            secureTextEntry
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
            placeholder="Password"
            style={styles.placeholder}
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
          <Text style={{ color: "#02A04E" }}>Don't have an account.</Text>
          <Text
            style={{
              color: "#02A04E",
              fontWeight: "bold"
            }}
          >
            &nbsp;Sign in
          </Text>
        </Item>
      </Content>
    </Container>
  );
};

export default LoginScreen;
