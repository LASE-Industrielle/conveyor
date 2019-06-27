import React from "react";
import { View, Text } from "react-native";

const ConveyorDetailsFormRow = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
      }}
    >
      <Text style={{ flex: 1 }}>{props.title}</Text>
      <View
        style={{
          flex: 0.1,
          borderLeftWidth: 1,
          borderLeftColor: "#F1B950"
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            color: "#3A7F78"
          }}
        >
          {props.item1}
        </Text>
        <Text
          style={{
            fontFamily: "HelveticaNeue",
            color: "#C5C5C5"
          }}
        >
          {props.item2}
        </Text>
      </View>
    </View>
  );
};

export default ConveyorDetailsFormRow;
