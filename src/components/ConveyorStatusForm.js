import React from "react";
import { View, StyleSheet } from "react-native";
import ConveyorDetailsFormRow from "../components/ConveyorDetailsFormRow";
import ConveyorDetailsFormHeader from "../components/ConveyorDetailsFormHeader";
import {elevationShadowStyle} from "../Styles";

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

const ConveyorStatusForm = props => {
    return (
        <View
            style={{
                flex: 4,
                zIndex: 2,
                paddingVertical: 15,
                paddingHorizontal: 5,
                justifyContent: "space-between",
                borderRadius: 6,
                //margin: 16,
                marginTop: 0,
                backgroundColor: "white",
                ...elevationShadowStyle(2),
            }}
        >
            <ConveyorDetailsFormHeader item1="STATUS" />
            <View style={styles.line} />
            <ConveyorDetailsFormRow title="Conveyor Velocity" item1="0.2" item2="m/s" />
            <View style={styles.line} />
            <ConveyorDetailsFormRow
                title="Volume Sum"
                item1="568"
                item2={"m\u00B3"}
            />
            <View style={styles.line} />
            <ConveyorDetailsFormRow title="Volume Flow Rate" item1="0.5" item2={"m\u00B3/s"} />
            <View style={styles.line} />
            <ConveyorDetailsFormRow
                title="Mass Sum"
                item1="3570"
                item2="kg"
            />
            <View style={styles.line} />
            <ConveyorDetailsFormRow
                title="Mass Flow Rate"
                item1="1.2"
                item2="kg/s"
            />
            <View style={styles.line} />
            <ConveyorDetailsFormRow
                title="Material Density"
                item1="89"
                item2={"kg/m\u00B3"}
            />
            <ConveyorDetailsFormRow
                title="Conveyor Deviation"
                item1="0.1"
                item2={"m"}
            />
        </View>
    );
};

export default ConveyorStatusForm;
