import React from "react";
import { View, StyleSheet } from "react-native";
import ConveyorDetailsFormRow from "../components/ConveyorDetailsFormRow";
import ConveyorDetailsFormHeader from "../components/ConveyorDetailsFormHeader";

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

const ConveyorDetailsForm = props => {
  return (
    <View
      style={{
        flex: 4,
        margin: 5,
        paddingVertical: 15,
        paddingHorizontal: 5,
        justifyContent: "space-between",
        borderRadius: 6,
        margin: 16,
        backgroundColor: "white"
      }}
    >
      <ConveyorDetailsFormHeader item1="JOB: #0001243" />
      <View style={styles.line} />
      <ConveyorDetailsFormRow title="Volume Sum" item1="2134.54" item2="m" />
      <View style={styles.line} />
      <ConveyorDetailsFormRow
        title="Volume Flow Rate"
        item1="0.26"
        item2="m3/s"
      />
      <View style={styles.line} />
      <ConveyorDetailsFormRow title="Belt Speed" item1="0.1" item2="m/s" />
      <View style={styles.line} />
      <ConveyorDetailsFormRow
        title="Material Name"
        item1="Scoria (Sap 7)"
        item2=""
      />
      <View style={styles.line} />
      <ConveyorDetailsFormRow
        title="Customer Name"
        item1="Maveric Earth Moves"
        item2=""
      />
      <View style={styles.line} />
      <ConveyorDetailsFormRow
        title="Target Volume"
        item1="2500.00"
        item2="m3"
      />
    </View>
  );
};

export default ConveyorDetailsForm;
