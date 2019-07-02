import React, {useEffect, useState} from "react";

import {Platform, Text, TouchableOpacity, View} from "react-native";
import ConveyorProgresSvg from "../components/ConveyorProgressSvg";
import ConveyorDetailsForm from "../components/ConveyorDetailsForm";
import {elevationShadowStyle} from "../Styles";
import LinearGradient from "react-native-linear-gradient";

const ConveyorDetailsScreen = ({ navigation }) => {
  const [percentage, setProgress] = useState(0);

  // useEffect(() => {
  //     navigation.getParam('id', 1) == 1 ? navigation.setParams({title: 'Conveyor 1'}) : navigation.setParams({title: 'Conveyor 2'})
  // }, []);

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
        //backgroundColor: "#F2F2F2",
        fontFamily: "HelveticaNeue"
      }}
    >
      <View
        style={{
          position: "absolute",
          top: Platform.OS === 'ios' ? 0 :32,
          zIndex: 1,
          backgroundColor: "#F2F2F2",
          flex: 1,
          width: "100%",
          height: "100%"
        }}
      >
          {Platform.OS === 'ios' ?
              <LinearGradient style={{height: 134}}
                              colors={["#84CFA8", "#539A88"]}
              />
              :
              null
          }
      </View>
      <ConveyorDetailsForm />
      <View
        style={{
          flex: 1.25,
          justifyContent: "center",
          flexDirection: "column",
          marginVertical: 1,
          zIndex: 2
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
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        <TouchableOpacity
          style={{
            marginVertical: 26,
            marginHorizontal: 16,
            paddingVertical: Platform.OS === 'ios' ? 0 : 21,
            alignItems: "center",
            flex: Platform.OS === 'ios' ? 0.7 : 1,
            backgroundColor: "#02A04E",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: 5,
            ...elevationShadowStyle(2)
          }}
          onPress={() => {
            navigation.navigate("ScannersAnalytic");
          }}
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
