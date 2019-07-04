import React from 'react';
import {Platform, Text, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { bgGradientStart, bgGradientEnd, bgColor } from '../Colors';

const NotificationsScreen = (props) => {

    return (
        <View style={{backgroundColor: 'transparent', width: '100%', height: '100%'}}>
            <View
                style={{
                    position: "absolute",
                    top: Platform.OS === 'ios' ? 0 : 32,
                    zIndex: 1,
                    backgroundColor: bgColor,
                    flex: 1,
                    width: "100%",
                    height: '100%'
                }}
            >
                {Platform.OS === 'ios' ?
                    <LinearGradient style={{height: 134}}
                                    colors={[bgGradientStart, bgGradientEnd]}
                    />
                    :
                    null
                }
            </View>
            <View style={{
                backgroundColor: bgColor,
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
                zIndex: 2,
                marginTop: Platform.OS === 'ios' ? 134 : 32
            }}>
                <Text style={{color: '#AAA9A9'}}>0 notifications</Text>
            </View>
        </View>
    );
};


export default NotificationsScreen;
