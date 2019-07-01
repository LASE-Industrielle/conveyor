import React, { useState } from "react";
import { Switch, TouchableOpacity, View } from "react-native";
import ccLogo from "../../assets/img/cc.jpg";

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Title
} from "native-base";

import { useStateValue } from "../context/StateContext";
import resetAction from "../utils/NavigationUtils";

import { primary } from "../Colors";
import { LOGOUT_USER } from "../Actions";
import styles, {elevationShadowStyle} from "../Styles";
import NotificationIcon from "../icons/NotificationIcon";
import SynchronizationIcon from "../icons/SynchronizationIcon";
import LogoutIcon from "../icons/LogoutIcon";

const ProfileScreen = props => {
  const [{ profile }, dispatch] = useStateValue();

  const [sync1, setSync1] = useState(true);
  const [sync2, setSync2] = useState(false);

  const logout = () => {
    dispatch({ type: LOGOUT_USER });
    props.navigation.dispatch(resetAction);
  };

  return (
    <Container style={{ backgroundColor: "#F2F2F2" }}>
      <Content
        style={{
          margin: 20,
          backgroundColor: "white",
          borderRadius: 8,
          padding: 10,
          fontSize: 13,
          ...elevationShadowStyle(2, 0.12)
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            margin: 15,
            flexDirection: "row"
          }}
        >
          <Thumbnail circle large style={{ marginTop: 30 }} source={ccLogo} />
        </View>
        <Title style={{ paddingBottom: 15 }}>{profile.username}</Title>
        <ListItem icon>
          <Left>
            <Button
              style={{
                backgroundColor: '#02A04E',
                opacity: 0.08
              }}
              textStyle={{}}
            >
            </Button>
            <SynchronizationIcon fill={'#02A04E'} style={{opacity: 1, zIndex: 100, position: 'absolute', left: 8}}/>
          </Left>
          <Body>
            <Text style={{ fontFamily: "HelveticaNeue", color: "#797979" }}>
              Syncronization
            </Text>
          </Body>
          <Right>
            <Switch value={sync1} onValueChange={() => setSync1(!sync1)} />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{
              backgroundColor: '#02A04E',
              opacity: 0.08
            }}>
            </Button>
            <NotificationIcon fill={'#02A04E'} height={14} width={12} style={{opacity: 1, zIndex: 100, position: 'absolute', left: 8}}/>
          </Left>
          <Body>
            <Text style={{ fontFamily: "HelveticaNeue", color: "#797979" }}>
              Notifications
            </Text>
          </Body>
          <Right>
            <Switch value={sync2} onValueChange={() => setSync2(!sync2)} />
          </Right>
        </ListItem>
        <ListItem icon onPress={logout}>
          <Left>
            <Button style={{
              backgroundColor: '#F19B93',
              opacity: 0.1
            }}>
            </Button>
            <LogoutIcon fill={'#F19B93'} height={14} width={12} style={{opacity: 1, zIndex: 100, position: 'absolute', left: 8}}/>
          </Left>
          <Body>
            <Text
              style={{
                fontFamily: "HelveticaNeue",
                fontWeight: "bold",
                color: "#F19B93"
              }}
            >
              Logout
            </Text>
          </Body>
          <Right />
        </ListItem>
      </Content>
    </Container>
  );
};

export default ProfileScreen;
