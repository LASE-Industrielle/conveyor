import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView
} from "react-native";
import ConveyorDetailsFormRow from "../components/ConveyorDetailsFormRow";
import ConveyorDetailsFormHeader from "../components/ConveyorDetailsFormHeader";
import { elevationShadowStyle } from "../Styles";

const styles = StyleSheet.create({
  line: {
    marginHorizontal: 15,
    borderBottomColor: "#E8E6EA",
    borderBottomWidth: 0.4
  },
  formText: {
    fontFamily: "HelveticaNeue"
  }
});

const ConveyorDetailsForm = ({ conveyor }) => {
  return (
    <View
      style={{
        zIndex: 2,
        //paddingVertical: 30,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        borderRadius: 6,
        margin: 16,
        backgroundColor: "white",
        ...elevationShadowStyle(2)
      }}
    >
      <View
        style={{
          //flex: 4,
          zIndex: 2,
          paddingVertical: 30,
          //paddingHorizontal: 5,
          //justifyContent: "space-between",
          //borderRadius: 6,
          //margin: 16,
          //marginTop: Platform.OS === 'ios' ? 102 : 0,
          backgroundColor: "transparent"
          //...elevationShadowStyle(2),
          //marginHorizontal: 15,
          //height: 200
        }}
      >
        <ConveyorDetailsFormHeader item1="JOB: #0001243" />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Customer Name"
          item1={conveyor.customer.name}
          item2=""
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Material Name"
          item1={conveyor.material.name}
          item2=""
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Material Density"
          item1="1.866"
          item2={"t\u00B3/s"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Conveyor Speed"
          item1={conveyor.latest_measurement.conveyor_speed}
          item2={"m/s"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow title="Belt Speed" item1="0.1" item2="m/s" />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Area"
          item1={conveyor.latest_measurement.calculated_area}
          item2={"m\u00B2"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Total Area"
          item1="0.363"
          item2={"m\u00B2"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Volume Sum"
          item1={conveyor.latest_measurement.volume_sum}
          item2={"m\u00B3/h"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Volume Stream"
          item1="1434.35"
          item2={"m\u00B3/h"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Volume Flow Rate"
          item1={conveyor.latest_measurement.avg_volume_flow}
          item2={"m\u00B3/s"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Target Volume"
          item1={conveyor.latest_measurement.limit_volume_sum}
          item2={"m\u00B3"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Mass Sum"
          item1={conveyor.latest_measurement.mass_sum}
          item2={"t"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Mass Stream"
          item1={conveyor.latest_measurement.avg_mass_flow}
          item2={"t/h"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Cons. Deviation"
          item1="66"
          item2={"mm"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
          title="Count Valid Pts"
          item1={conveyor.latest_measurement.valid_points}
          item2={"%"}
        />
      </View>
    </View>
  );
};

export default ConveyorDetailsForm;
