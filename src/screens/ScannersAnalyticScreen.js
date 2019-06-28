import React, { useEffect } from "react";

import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Tab,
  Tabs,
  Text,
  Title,
  Content
} from "native-base";
import getConveyors from "../services/ConveyorsService";
import { useStateValue } from "../context/StateContext";
import styles from "../Styles";
import NotificationIcon from "../icons/NotificationIcon";
import { TouchableOpacity, View } from "react-native";
import GraphComponent from "../components/GraphComponent";
import ConveyorDetailsForm from "../components/ConveyorDetailsForm";

const ScannersAnalyticScreen = props => {
  const conveyorId = props.navigation.getParam("id");

  const [{ conveyors }, dispatch] = useStateValue();

  useEffect(() => {
    getConveyors(dispatch);
  }, []);

  return (
    <Container>
      <Header transparent>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" style={styles.arrow} />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "black" }}>SCANNERS ANALYTIC</Title>
        </Body>
        <Right>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Notifications")}
          >
            <NotificationIcon style={{ marginRight: 8 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Icon
              name="person"
              style={{ marginLeft: 8, height: 27, width: 27 }}
            />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content
        contentContainerStyle={{
          backgroundColor: "#F2F2F2"
        }}
      >
        <View
          style={{
            paddingHorizontal: 5,
            justifyContent: "center",
            flexDirection: "row",
            borderRadius: 6,
            marginHorizontal: 15,
            marginTop: 15,
            backgroundColor: "white"
          }}
        >
          <GraphComponent />
        </View>
        <ConveyorDetailsForm style={{ borderRadius: 5 }} />
      </Content>
    </Container>
  );
};

export default ScannersAnalyticScreen;
