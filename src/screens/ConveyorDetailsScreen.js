import React, { useEffect } from "react";

import {
  Platform,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl
} from "react-native";
import ConveyorDetailsForm from "../components/ConveyorDetailsForm";
import { elevationShadowStyle } from "../Styles";
import LinearGradient from "react-native-linear-gradient";
import VolumeStreamComponent from "../components/VolumeStreamComponent";
import { useStateValue } from "../context/StateContext";
import { getConveyorById } from "../services/ConveyorsService";
import { bgColor } from "../Colors";

const ConveyorDetailsScreen = ({ navigation }) => {
  const [{ conveyor }, dispatch] = useStateValue();

  useEffect(() => {
    getConveyorById(dispatch, navigation.getParam("id", ""));
  }, []);

  const reload = () => {
    getConveyorById(dispatch, navigation.getParam("id", ""));
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        fontFamily: "HelveticaNeue"
      }}
    >
      <View
        style={{
          position: "absolute",
          top: Platform.OS === "ios" ? 0 : 32,
          zIndex: 1,
          backgroundColor: bgColor,
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      >
        {Platform.OS === "ios" ? (
          <LinearGradient
            style={{ height: 134 }}
            colors={["#84CFA8", "#539A88"]}
          />
        ) : null}
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={conveyor.loading}
            onRefresh={() => {
              reload();
            }}
          />
        }
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 4,
          zIndex: 2,
          //paddingVertical: 15,
          //paddingHorizontal: 5,
          //justifyContent: "space-between",
          //borderRadius: 6,
          //margin: 16,
          marginTop: Platform.OS === "ios" ? 102 : 0,
          backgroundColor: "transparent"
          //...elevationShadowStyle(2),
          //marginHorizontal: 15,
        }}
      >
        <View
          style={{
            paddingHorizontal: 5,
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: 6,
            marginHorizontal: 15,
            marginTop: 0,
            backgroundColor: "white",
            ...elevationShadowStyle(2),
            marginBottom: 4,
            paddingVertical: 15,
            //paddingLeft:
            alignItems: "center"
          }}
        >
          <VolumeStreamComponent
            percentage={50}
            upperLimit={conveyor.details.latest_measurement.upper_limit_flow}
            lowerLimit={conveyor.details.latest_measurement.lower_limit_flow}
          />
        </View>
        <ConveyorDetailsForm conveyor={conveyor.details} />
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          flex: 0.17,
          justifyContent: "center",
          flexDirection: "column",
          zIndex: 2
        }}
      >
        <TouchableOpacity
          style={{
            margin: 22,
            paddingVertical: Platform.OS === "ios" ? 0 : 5,
            alignItems: "center",
            flex: Platform.OS === "ios" ? 0.7 : 0.8,
            backgroundColor: "#02A04E",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: 5,
            ...elevationShadowStyle(2)
          }}
          onPress={() => {
            navigation.navigate("ScannerAnalytics");
          }}
        >
          <Text style={{ color: "white", fontFamily: "HelveticaNeue" }}>
            ANALYTICS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConveyorDetailsScreen;
