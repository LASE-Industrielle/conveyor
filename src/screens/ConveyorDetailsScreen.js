import React, {useEffect, useState} from "react";

import {Platform, Text, TouchableOpacity, View, ScrollView} from "react-native";
import ConveyorProgresSvg from "../components/ConveyorProgressSvg";
import ConveyorDetailsForm from "../components/ConveyorDetailsForm";
import {elevationShadowStyle} from "../Styles";
import LinearGradient from "react-native-linear-gradient";
import VolumeStreamComponent from "../components/VolumeStreamComponent";
import GraphComponent from "../components/GraphComponent";
import {useStateValue} from "../context/StateContext";
import {getConveyorById} from "../services/ConveyorsService";

const ConveyorDetailsScreen = ({navigation}) => {
    const [{conveyor}, dispatch] = useStateValue();
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

    useEffect(() => {
        getConveyorById(dispatch, navigation.getParam('id', ''));
    }, []);

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
                    top: Platform.OS === 'ios' ? 0 : 32,
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
            <View style={{
                flex: 4,
                zIndex: 2,
                //paddingVertical: 15,
                //paddingHorizontal: 5,
                //justifyContent: "space-between",
                //borderRadius: 6,
                //margin: 16,
                marginTop: Platform.OS === 'ios' ? 102 : 0,
                backgroundColor: "transparent",
                //...elevationShadowStyle(2),
                //marginHorizontal: 15,

            }}>
                <View
                    style={{
                        paddingHorizontal: 5,
                        justifyContent: "center",
                        flexDirection: "column",
                        borderRadius: 6,
                        marginHorizontal: 15,
                        //marginTop: 15,
                        backgroundColor: "white",
                        ...elevationShadowStyle(2),
                        marginBottom: 4,
                        paddingVertical: 15,
                        //paddingLeft:
                        alignItems: 'center'
                    }}
                >
                    <VolumeStreamComponent
                        percentage={50}
                        upperLimit={conveyor.details.latest_measurement.upper_limit_flow}
                        lowerLimit={conveyor.details.latest_measurement.lower_limit_flow}
                    />
                </View>
                    <ConveyorDetailsForm conveyor={conveyor.details}/>
                <View
                    style={{
                        flex: 1.25,
                        justifyContent: "center",
                        flexDirection: "column",
                        //marginVertical: 1,
                        zIndex: 2,

                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            flex: 1,
                            backgroundColor: "white",
                            shadowColor: "#000000",
                            justifyContent: "center",
                            flexDirection: "column",
                            paddingVertical: 20,

                        }}
                    >
                        <ConveyorProgresSvg percentage={percentage.toString()}/>
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
                            paddingVertical: Platform.OS === 'ios' ? 0 : 17,
                            alignItems: "center",
                            flex: Platform.OS === 'ios' ? 0.7 : 1,
                            backgroundColor: "#02A04E",
                            justifyContent: "center",
                            flexDirection: "column",
                            borderRadius: 5,
                            ...elevationShadowStyle(2),
                            marginTop: 0
                        }}
                        onPress={() => {
                            navigation.navigate("ScannersAnalytic");
                        }}
                    >
                        <Text style={{color: "white", fontFamily: "HelveticaNeue"}}>ANALYTICS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ConveyorDetailsScreen;
