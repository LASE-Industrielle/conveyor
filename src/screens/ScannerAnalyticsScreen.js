import React, { useEffect } from 'react';
import { Platform, ScrollView, View, RefreshControl } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { getConveyors } from '../services/ConveyorsService';
import { useStore } from '../context/StateContext';

import GraphComponent from '../components/GraphComponent';
import ConveyorStatusForm from '../components/ConveyorStatusForm';

import { blue, orange, red, bgGradientStart, bgGradientEnd, bgColor } from '../Colors';
import { elevationShadowStyle } from '../Styles';

const ScannersAnalyticsScreen = () => {
  const [{ conveyors }, dispatch] = useStore();

  const latestMeasurement = conveyors.data[0].latest_measurement;
  const chartData = conveyors.data[0].chart_data;
  const { conveyor_speed, volume_sum, avg_volume_flow, scanner_status } = latestMeasurement;
  const volumeSumMeasurements = chartData.volume_sum;
  const volumeFlowMeasurements = chartData.volume_flow;
  const conveyorSpeedMeasurements = chartData.conveyor_speed;

  useEffect(() => {
    getConveyors(dispatch);
  }, []);

  const onRefresh = () => {
    getConveyors(dispatch);
  };

  return (
    <View style={{ backgroundColor: 'transparent', width: '100%', height: '100%' }}>
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
        {Platform.OS === 'ios' && <LinearGradient style={{ height: 134 }} colors={[bgGradientStart, bgGradientEnd]} />}
      </View>
      <ScrollView
        refreshControl={<RefreshControl refreshing={conveyors.loading} onRefresh={onRefresh} />}
        style={{
          zIndex: 2,
          marginTop: Platform.OS === 'ios' ? 102 : 0,
          backgroundColor: 'transparent'
        }}
      >
        <View
          pointerEvents="none"
          style={{
            paddingHorizontal: 5,
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: 6,
            marginHorizontal: 15,
            // marginTop: 15,
            backgroundColor: 'white',
            ...elevationShadowStyle(2),
            marginBottom: 18
          }}
        >
          <GraphComponent
            lineColor={orange}
            loading={conveyors.loading}
            label="Volume Sum"
            data={volumeSumMeasurements}
            value={volume_sum}
            units={'dm\u00B3'}
          />
          <GraphComponent
            lineColor={blue}
            loading={conveyors.loading}
            label="Volume Flow Rate"
            data={volumeFlowMeasurements}
            value={avg_volume_flow}
            units={'dm\u00B3/h'}
          />
          <GraphComponent
            lineColor={red}
            loading={conveyors.loading}
            label="Conveyor Speed"
            data={conveyorSpeedMeasurements}
            value={conveyor_speed}
            units="mm/s"
          />
        </View>
      </ScrollView>
      <View style={{ height: 60 }}>
        <ConveyorStatusForm status={scanner_status} />
      </View>
    </View>
  );
};

export default ScannersAnalyticsScreen;
