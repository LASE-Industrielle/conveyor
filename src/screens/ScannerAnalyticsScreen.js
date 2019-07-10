import React, { useEffect, useState } from 'react';
import { Platform, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';

import GraphComponent from '../components/GraphComponent';
import { getConveyors } from '../services/ConveyorsService';
import { useStore } from '../context/StateContext';
import ConveyorStatusForm from '../components/ConveyorStatusForm';

import { blue, orange, red, white } from '../Colors';
import { elevationShadowStyle } from '../Styles';
import GradientHeaderComponent from '../components/GradientHeaderComponent';

const styles = StyleSheet.create({
  scrollView: {
    zIndex: 2,
    bottom: 32,
  },
  graphOuterView: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 6,
    marginHorizontal: 15,
    backgroundColor: white,
    ...elevationShadowStyle(2),
    marginBottom: 18,
  },
  conveyorStatusView: {
    height: Platform.OS === 'ios' ? 80 : 60,
  },
});

const ScannerAnalyticsScreen = () => {
  const [volumeSumMeasurements, setVolumeSumMeasurements] = useState();
  const [volumeSumMeasurementsTicks, setVolumeSumMeasurementsTicks] = useState();

  const [volumeFlowMeasurements, setVolumeFlowMeasurements] = useState();
  const [volumeFlowMeasurementsTicks, setVolumeFlowMeasurementsTicks] = useState();

  const [conveyorSpeedMeasurements, setConveyorSpeedMeasurements] = useState();
  const [conveyorSpeedMeasurementsTicks, setConveyorSpeedMeasurementsTicks] = useState();

  const [volumeSum, setVolumeSum] = useState();
  const [avgVolumeFlow, setAvgVolumeFlow] = useState();
  const [conveyorSpeed, setConveyorSpeed] = useState();
  const [scannerStatus, setScannerStatus] = useState();

  const [{ conveyors }, dispatch] = useStore();

  const createTicks = data => {
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const midValue = (maxValue + minValue) / 2;
    const generateConstantTicks = value => [value - 2, value - 1, value, value + 1, value + 2];
    const generateAvgTicks = (minValue, midValue, maxValue) => [
      minValue,
      (minValue + midValue) / 2,
      midValue,
      (midValue + maxValue) / 2,
      maxValue
    ];
    return maxValue - minValue === 0 ? generateConstantTicks(minValue) : generateAvgTicks(minValue, midValue, maxValue);
  };

  const refreshData = () => {
    getConveyors(dispatch);
    const { latest_measurement: latestMeasurement, chart_data: chartData } = conveyors.data[0];

    setVolumeSum(latestMeasurement.volume_sum);
    setAvgVolumeFlow(latestMeasurement.avg_volume_flow);
    setConveyorSpeed(latestMeasurement.conveyor_speed);
    setScannerStatus(latestMeasurement.scanner_status);

    const volumeSumMeasurements = chartData.volume_sum;
    const volumeFlowMeasurements = chartData.volume_flow;
    const conveyorSpeedMeasurements = chartData.conveyor_speed;

    setVolumeSumMeasurementsTicks(createTicks(volumeSumMeasurements));
    setVolumeSumMeasurements(volumeSumMeasurements.map((item, index) => ({ x: index, y: item })));

    setVolumeFlowMeasurementsTicks(createTicks(volumeFlowMeasurements));
    setVolumeFlowMeasurements(volumeFlowMeasurements.map((item, index) => ({ x: index, y: item })));

    setConveyorSpeedMeasurementsTicks(createTicks(conveyorSpeedMeasurements));
    setConveyorSpeedMeasurements(conveyorSpeedMeasurements.map((item, index) => ({ x: index, y: item })));
  };

  useEffect(() => {
    refreshData();
  }, []);

  const onRefresh = () => {
    refreshData();
  };

  return (
    <GradientHeaderComponent>
      <ScrollView
        refreshControl={<RefreshControl refreshing={false} onRefresh={onRefresh} />}
        style={styles.scrollView}
      >
        <View pointerEvents="none" style={styles.graphOuterView}>
          {volumeSumMeasurements && (
            <GraphComponent
              lineColor={orange}
              loading={false}
              label="Volume Sum"
              data={volumeSumMeasurements}
              ticks={volumeSumMeasurementsTicks}
              value={volumeSum}
              units={'dm\u00B3'}
            />
          )}

          {volumeFlowMeasurements && (
            <GraphComponent
              lineColor={blue}
              loading={false}
              label="Volume Flow Rate"
              data={volumeFlowMeasurements}
              ticks={volumeFlowMeasurementsTicks}
              value={avgVolumeFlow}
              units={'dm\u00B3/h'}
            />
          )}

          {conveyorSpeedMeasurements && (
            <GraphComponent
              lineColor={red}
              loading={false}
              label="Conveyor Speed"
              data={conveyorSpeedMeasurements}
              ticks={conveyorSpeedMeasurementsTicks}
              value={conveyorSpeed}
              units="mm/s"
            />
          )}
        </View>
      </ScrollView>
      <View style={styles.conveyorStatusView}>
        <ConveyorStatusForm status={scannerStatus} />
      </View>
    </GradientHeaderComponent>
  );
};

export default ScannerAnalyticsScreen;
