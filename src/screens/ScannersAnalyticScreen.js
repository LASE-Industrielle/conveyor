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
import styles, {elevationShadowStyle} from "../Styles";
import NotificationIcon from "../icons/NotificationIcon";
import { TouchableOpacity, View } from "react-native";
import GraphComponent from "../components/GraphComponent";
import ConveyorDetailsForm from "../components/ConveyorDetailsForm";
import ConveyorStatusForm from "../components/ConveyorStatusForm";

const ScannersAnalyticScreen = props => {
  const conveyorId = props.navigation.getParam("id");

  const [{ conveyors }, dispatch] = useStateValue();

  useEffect(() => {
    getConveyors(dispatch);
  }, []);

  return (
    <Container style={{
        backgroundColor: "#F2F2F2"
    }}>
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
            backgroundColor: "white",
            ...elevationShadowStyle(2),
            marginBottom: 18,
          }}
        >
          <GraphComponent />
        </View>
        <ConveyorStatusForm style={{ borderRadius: 5 }} />
      </Content>
    </Container>
  );
};

export default ScannersAnalyticScreen;
