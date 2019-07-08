import React, { useEffect } from 'react';
import { Platform, Text, TouchableOpacity, View, ScrollView, RefreshControl } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ConveyorDetailsForm from '../components/ConveyorDetailsForm';
import VolumeStreamComponent from '../components/VolumeStreamComponent';
import { useStore } from '../context/StateContext';
import { getConveyorById } from '../services/ConveyorsService';

import { elevationShadowStyle } from '../Styles';
import { bgColor, bgGradientStart, bgGradientEnd, greenIconColor } from '../Colors';

const ConveyorDetailsScreen = ({ navigation }) => {
  const [{ conveyor }, dispatch] = useStore();

  useEffect(() => {
    getConveyorById(dispatch, navigation.getParam('id', ''), true);

    const timer = setInterval(() => getConveyorById(dispatch, navigation.getParam('id', ''), false), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const reload = () => {
    getConveyorById(dispatch, navigation.getParam('id', ''), true);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? 0 : 32,
          zIndex: 1,
          backgroundColor: bgColor,
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        {Platform.OS === 'ios' ? (
          <LinearGradient style={{ height: 134 }} colors={[bgGradientStart, bgGradientEnd]} />
        ) : null}
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={conveyor.loading}
            onRefresh={() => {
              reload();
            }}
          />
        }
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 4,
          zIndex: 2,
          marginTop: Platform.OS === 'ios' ? 102 : 0,
          backgroundColor: 'transparent'
        }}
      >
        {conveyor.loading ? null : (
          <View
            style={{
              paddingHorizontal: 5,
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: 6,
              marginHorizontal: 15,
              marginTop: 0,
              backgroundColor: 'white',
              ...elevationShadowStyle(2),
              marginBottom: 4,
              paddingVertical: 15,
              alignItems: 'center'
            }}
          >
            <VolumeStreamComponent
              percentage={
                conveyor.details.latest_measurement.percentage_full === undefined
                  ? 0
                  : conveyor.details.latest_measurement.percentage_full
              }
              upperLimit={conveyor.details.latest_measurement.upper_limit_flow}
              lowerLimit={conveyor.details.latest_measurement.lower_limit_flow}
            />
          </View>
        )}
        {conveyor.loading ? null : <ConveyorDetailsForm conveyor={conveyor.details} />}
      </ScrollView>
      {conveyor.loading ? null : (
        <View
          style={{
            backgroundColor: 'white',
            flex: 0.17,
            justifyContent: 'center',
            flexDirection: 'column',
            zIndex: 2
          }}
        >
          <TouchableOpacity
            style={{
              margin: 22,
              paddingVertical: Platform.OS === 'ios' ? 0 : 5,
              alignItems: 'center',
              flex: Platform.OS === 'ios' ? 0.7 : 0.8,
              backgroundColor: greenIconColor,
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: 5,
              ...elevationShadowStyle(2)
            }}
            onPress={() => {
              navigation.navigate('ScannersAnalytic');
            }}
          >
            <Text style={{ color: 'white' }}>ANALYTICS</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ConveyorDetailsScreen;
