import React, { useState, useEffect } from "react";

import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import ConveyorProgresSvg from "../components/ConveyorProgressSvg";
import ConveyorDetailsForm from "../components/ConveyorDetailsForm";

const ConveyorDetailsScreen = () => {
  const [percentage, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setProgress(percentage + 10);
      }
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F2F2F2",
        fontFamily: "HelveticaNeue"
      }}
    >
      <View
        style={{
          flex: 0.7,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          shadowColor: "#000000"
        }}
      >
        <Text style={{ color: "#606060", paddingLeft: 20.5 }}>{"<"}</Text>
        <Text style={{ fontFamily: "HelveticaNeueMedium", fontSize: 18 }}>
          Conveyor 1
        </Text>
        <Text style={{ color: "#606060", paddingRight: 20.5 }}>2</Text>
      </View>
      <ConveyorDetailsForm />
      <View
        style={{
          flex: 1.25,
          justifyContent: "center",
          flexDirection: "column",
          marginVertical: 1
        }}
      >
        <View
          style={{
            alignItems: "center",
            flex: 1,
            backgroundColor: "white",
            shadowColor: "#000000",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <ConveyorProgresSvg percentage={percentage.toString()} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 1.11,
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <TouchableOpacity
          style={{
            marginVertical: 26,
            marginHorizontal: 16,
            paddingVertical: 21,
            alignItems: "center",
            flex: 1,
            backgroundColor: "#02A04E",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: 5.0,
            elevation: 2 // to be done cross platform
          }}
          onPress={() => {}}
        >
          <Text style={{ color: "white", fontFamily: "HelveticaNeue" }}>
            SCANNER ANALYTICS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConveyorDetailsScreen;
