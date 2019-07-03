import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import ConveyorDetailsFormRow from "../components/ConveyorDetailsFormRow";
import ConveyorDetailsFormHeader from "../components/ConveyorDetailsFormHeader";
import {elevationShadowStyle} from "../Styles";

const styles = StyleSheet.create({
  line: {
    marginHorizontal: 15,
    borderBottomColor: "#E8E6EA",
    borderBottomWidth: 0.4,
  },
  formText: {
    fontFamily: "HelveticaNeue"
  }
});

const ConveyorDetailsForm = props => {
  return (
    <View
      style={{
        flex: 4,
        zIndex: 2,
        paddingVertical: 30,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        borderRadius: 6,
        margin: 16,
        marginTop: Platform.OS === 'ios' ? 102: 0,
        backgroundColor: "white",
        ...elevationShadowStyle(2),
      }}
    >
      <ConveyorDetailsFormHeader item1="JOB: #0001243" />
      <View style={styles.line} />
        <ConveyorDetailsFormRow
            title="Customer Name"
            item1="Maveric Earth Moves"
            item2=""
        />
      <View style={styles.line} />
        <ConveyorDetailsFormRow
            title="Material Name"
            item1="Scoria (Sap 7)"
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
            item1="1.080"
            item2={"m/s"}
        />
      <View style={styles.line} />
      <ConveyorDetailsFormRow title="Belt Speed" item1="0.1" item2="m/s" />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
            title="Area"
            item1="0.363"
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
            item1="1.20"
            item2={"m\u00B3/h"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
            title="Volume Stream"
            item1="1434.35"
            item2={"m\u00B3/s"}
        />
      <View style={styles.line} />
        <ConveyorDetailsFormRow
            title="Volume Flow Rate"
            item1="0.26"
            item2={"m\u00B3/s"}
        />
      <View style={styles.line} />
        <ConveyorDetailsFormRow title="Volume Sum" item1="2134.54" item2="m" />
      <View style={styles.line} />
      <ConveyorDetailsFormRow
        title="Target Volume"
        item1="2500.00"
        item2={"m\u00B3"}
      />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
            title="Mass Sum"
            item1="2.24"
            item2={"t"}
        />
        <View style={styles.line} />
        <ConveyorDetailsFormRow
            title="Mass Stream"
            item1="0.49"
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
            item1="75"
            item2={"%"}
        />
    </View>
  );
};

export default ConveyorDetailsForm;
