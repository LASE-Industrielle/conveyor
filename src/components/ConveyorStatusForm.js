import React from "react";
import {View, StyleSheet, Text, Platform} from "react-native";
import ConveyorDetailsFormRow from "../components/ConveyorDetailsFormRow";
import ConveyorDetailsFormHeader from "../components/ConveyorDetailsFormHeader";
import {elevationShadowStyle} from "../Styles";
import {Circle, Svg} from "react-native-svg";

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
    const { status } = props;
    const color = status === 'OK'?'#6CC799':'#F19B93'
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
            {/*<ConveyorDetailsFormHeader item1="DETAILS" />*/}
            {/*<View style={styles.line} />*/}
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 10,
                }}
            >
                <Svg
                    height="9"
                    width="9"
                    viewBox="0 0 100 100"
                    style={{alignSelf: 'center', marginLeft: 10, marginRight: 12}}
                >
                    <Circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="blue"
                        strokeWidth="2.5"
                        fill={color}
                    />
                </Svg>
                <Text style={{ flex: 1, color: '#AAA9A9', fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Medium" : "HelveticaNeueMedium", fontSize: 13}}>{'Status: '}
                    <Text style={{color: color, fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Medium" : "HelveticaNeueMedium", fontSize: 13}}>{status}</Text>
                </Text>
            </View>
        </View>
    );
};

export default ConveyorStatusForm;
