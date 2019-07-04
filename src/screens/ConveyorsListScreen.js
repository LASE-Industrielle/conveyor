import React, { useEffect } from "react";

import { Text } from "native-base";
import { getConveyors } from "../services/ConveyorsService";
import { useStateValue } from "../context/StateContext";
import { FlatList, Platform, TouchableOpacity, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import { elevationShadowStyle } from "../Styles";
import LinearGradient from "react-native-linear-gradient";

const ConveyorsListScreen = props => {
  const [{ conveyors }, dispatch] = useStateValue();

  useEffect(() => {
    getConveyors(dispatch);
  }, []);

  const reload = () => {
    getConveyors(dispatch);
  };

  const renderListItem = ({ item }) =>
    Platform.OS === "ios" ? (
      <View
        style={{
          //height: 68,
          flex: 1,
          flexDirection: "column",
          alignSelf: "stretch",
          backgroundColor: "#FFFFFF",
          marginHorizontal: 16,
          zIndex: 3,
          marginBottom: 5,
          ...elevationShadowStyle(2)
        }}
      >
        <TouchableOpacity
          style={{ paddingBottom: 16 }}
          onPress={() =>
            props.navigation.navigate("ConveyorDetails", {
              id: item.id,
              title: item.name
            })
          }
        >
          <Svg
            height="9"
            width="9"
            viewBox="0 0 100 100"
            style={{ alignSelf: "flex-end", marginTop: 10, marginRight: 10 }}
          >
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill={
                item.latest_measurement.scanner_status.toUpperCase() === "OK"
                  ? "#6CC799"
                  : "#F19B93"
              }
            />
          </Svg>
          <Text
            style={{
              marginTop: -5,
              marginLeft: 18,
              fontFamily:
                Platform.OS === "ios"
                  ? "HelveticaNeue-Bold"
                  : "HelveticaNeueBold",
              fontSize: 13
            }}
          >
            {item.name.toUpperCase()}
          </Text>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 4,
              color: "#AAA9A9",
              fontFamily:
                Platform.OS === "ios"
                  ? "HelveticaNeue-Medium"
                  : "HelveticaNeueMedium",
              fontSize: 13
            }}
          >
            Status:{" "}
            {item.latest_measurement.scanner_status.toUpperCase() === "OK" ? (
              <Text
                style={{
                  color: "#6CC799",
                  fontFamily:
                    Platform.OS === "ios"
                      ? "HelveticaNeue-Medium"
                      : "HelveticaNeueMedium",
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            ) : (
              <Text
                style={{
                  color: "#F19B93",
                  fontFamily:
                    Platform.OS === "ios"
                      ? "HelveticaNeue-Medium"
                      : "HelveticaNeueMedium",
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View
        style={{
          //height: 68,
          flex: 1,
          flexDirection: "column",
          alignSelf: "stretch",
          backgroundColor: "#FFFFFF",
          marginHorizontal: 16,
          zIndex: 3,
          marginBottom: 5,
          ...elevationShadowStyle(2)
        }}
      >
        <TouchableOpacity
          style={{ paddingBottom: 16 }}
          onPress={() =>
            props.navigation.navigate("ConveyorDetails", {
              id: item.id,
              title: item.name
            })
          }
        >
          <Svg
            height="9"
            width="9"
            viewBox="0 0 100 100"
            style={{ alignSelf: "flex-end", marginTop: 10, marginRight: 10 }}
          >
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill={
                item.latest_measurement.scanner_status.toUpperCase() === "OK"
                  ? "#6CC799"
                  : "#F19B93"
              }
            />
          </Svg>
          <Text
            style={{
              marginTop: -5,
              marginLeft: 18,
              fontFamily:
                Platform.OS === "ios"
                  ? "HelveticaNeue-Bold"
                  : "HelveticaNeueBold",
              fontSize: 13
            }}
          >
            {item.name.toUpperCase()}
          </Text>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 4,
              color: "#AAA9A9",
              fontFamily:
                Platform.OS === "ios"
                  ? "HelveticaNeue-Medium"
                  : "HelveticaNeueMedium",
              fontSize: 13
            }}
          >
            Status:{" "}
            {item.latest_measurement.scanner_status.toUpperCase() === "OK" ? (
              <Text
                style={{
                  color: "#6CC799",
                  fontFamily:
                    Platform.OS === "ios"
                      ? "HelveticaNeue-Medium"
                      : "HelveticaNeueMedium",
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            ) : (
              <Text
                style={{
                  color: "#F19B93",
                  fontFamily:
                    Platform.OS === "ios"
                      ? "HelveticaNeue-Medium"
                      : "HelveticaNeueMedium",
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    );

  return Platform.OS === "ios" ? (
    <View style={{ height: "100%" }}>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          backgroundColor: "#F2F2F2",
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      >
        <LinearGradient
          style={{ height: 134 }}
          colors={["#84CFA8", "#539A88"]}
        />
      </View>
      <FlatList
        refreshing={conveyors.loading}
        onRefresh={() => reload()}
        style={{ zIndex: 2, marginTop: 102 }}
        data={conveyors.data}
        keyExtractor={item => String(item.id)}
        //extraData={conveyors}
        renderItem={renderListItem}
      />
    </View>
  ) : (
    <View style={{ height: "100%" }}>
      <View
        style={{
          position: "absolute",
          top: 32,
          zIndex: 1,
          backgroundColor: "#F2F2F2",
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      />
      <FlatList
        refreshing={conveyors.loading}
        onRefresh={() => reload()}
        style={{ zIndex: 2 }}
        data={conveyors.data}
        keyExtractor={item => String(item.id)}
        //extraData={conveyors}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default ConveyorsListScreen;
