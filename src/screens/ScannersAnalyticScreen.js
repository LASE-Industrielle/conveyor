import React, {useEffect} from "react";
import getConveyors from "../services/ConveyorsService";
import {useStateValue} from "../context/StateContext";
import {elevationShadowStyle} from "../Styles";
import {Platform, ScrollView, View} from "react-native";
import GraphComponent from "../components/GraphComponent";
import ConveyorStatusForm from "../components/ConveyorStatusForm";
import LinearGradient from "react-native-linear-gradient";

const ScannersAnalyticScreen = props => {
    const conveyorId = props.navigation.getParam("id");

    const [{conveyors}, dispatch] = useStateValue();

    useEffect(() => {
        getConveyors(dispatch);
    }, []);

    return (
        <View style={{backgroundColor: 'transparent', width: '100%', height: '100%'}}>
            <View
                style={{
                    position: "absolute",
                    top: Platform.OS === 'ios' ? 0 : 32,
                    zIndex: 1,
                    backgroundColor: "#F2F2F2",
                    flex: 1,
                    width: "100%",
                    height: '100%'
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

            <ScrollView
                style={{
                    //flex: 4,
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

                }}
            >
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
                        marginBottom: 18,
                    }}
                >
                    <GraphComponent/>

                </View>
                <View style={{marginHorizontal: 0}}>
                <ConveyorStatusForm/>
                </View>
            </ScrollView>


        </View>
    );
};

export default ScannersAnalyticScreen;
