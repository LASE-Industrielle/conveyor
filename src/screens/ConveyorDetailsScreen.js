import React from 'react';

import {Text, TouchableOpacity, View} from "react-native";
import SvgComponent from "../components/ExampleComponent";

const ConveyorDetailsScreen = (props) => {

    return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#F2F2F2'}}>
            <View style={{flex: 0.7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 8,
                shadowOpacity: 0.12, backgroundColor: 'white',
                shadowColor: '#000000',}}>
                <Text style={{color: '#606060', paddingLeft: 20.5}}>{'<'}</Text>
                <Text>Conveyor 1</Text>
                <Text style={{color: '#606060', paddingRight: 20.5 }}>2</Text>
            </View>
            <View style={{ flex: 4, margin: 5, borderRadius: 6, marginTop: 20, backgroundColor: 'white'}}>
                <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text style={{ fontWeight: 'bold', color: '#606060'}}>Job: #0001243</Text>
                    <Text style={{ color: '#C5C5C5', fontWeight: '400'}}>1d 1w ago</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>Volume Sum</Text>
                    <Text style={{ color: '#C5C5C5', fontWeight: '400'}}>1d 1w ago</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>Volume Flow Rate</Text>
                    <Text style={{ color: '#C5C5C5', fontWeight: '400'}}>1d 1w ago</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>Belt Speed</Text>
                    <Text style={{ color: '#C5C5C5', fontWeight: '400'}}>1d 1w ago</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>Material Name</Text>
                    <Text style={{ color: '#C5C5C5', fontWeight: '400'}}>1d 1w ago</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>Customer Name</Text>
                    <Text style={{ color: '#C5C5C5', fontWeight: '400'}}>1d 1w ago</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.2,
                    }}
                />
                <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text>Target Volume</Text>
                    <Text style={{ color: '#C5C5C5', fontWeight: '400'}}>1d 1w ago</Text>
                </View>
            </View>
            <View style={{flex: 1.25, justifyContent: 'center', flexDirection: 'column', marginVertical: 10}}>
                <View style={{
                    alignItems: 'center',
                    flex: 1,
                    elevation: 1,
                    shadowOpacity: 0.12, backgroundColor: 'white',
                    shadowColor: '#000000',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <SvgComponent/>
                </View>
            </View>
            <View style={{backgroundColor: 'white', flex: 1.11, justifyContent: 'center', flexDirection: 'column'}}>
                <TouchableOpacity style={{
                    marginVertical: 26,
                    marginHorizontal: 16,
                    paddingVertical: 21,
                    alignItems: 'center',
                    flex: 1,
                    backgroundColor: '#02A04E',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    borderRadius: 5.0,
                    elevation: 2, // to be done cross platform
                }} onPress={() => {
                }}>
                    <Text style={{ color: 'white'}}>SCANNERS ANALYTICS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default ConveyorDetailsScreen;
