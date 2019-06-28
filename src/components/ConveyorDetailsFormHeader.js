import React from "react";
import { View, Text } from "react-native";
import { tsPropertySignature } from "@babel/types";
import {Platform} from 'react-native';

const ConveyorDetailsFormHeader = props => {
  return (
    <View
      style={{
        margin: 10,
        justifyContent: "space-between",
        flexDirection: "row"
      }}
    >
      <Text
        style={{
          color: "#262626",
          fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Bold" : "HelveticaNeueBold"
        }}
      >
        {props.item1}
      </Text>
    </View>
  );
};

export default ConveyorDetailsFormHeader;
