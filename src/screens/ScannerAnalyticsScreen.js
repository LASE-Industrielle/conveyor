import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Platform, RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Swiper from 'react-native-swiper';
import GraphComponent from '../components/GraphComponent';
import { getConveyorById } from '../services/ConveyorsService';
import { useStore } from '../context/StateContext';

import { blue, greyText, inactiveDotGrey, orange, red, white } from '../Colors';
import { elevationShadowStyle } from '../Styles';
import GradientHeaderComponent from '../components/GradientHeaderComponent';
import MeasurementDetailComponent from '../components/MeasurementDetailComponent';

const styles = StyleSheet.create({
  scrollView: {
    zIndex: 2,
    bottom: 32
  },
  graphOuterView: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 6,
    marginHorizontal: 15,
    backgroundColor: white,
    ...elevationShadowStyle(2),
    marginBottom: 18
  },
  conveyorStatusView: {
    height: Platform.OS === 'ios' ? 80 : 60
  }
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

  const [{ conveyor }, dispatch] = useStore();

  const navigation = useNavigation();

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
    getConveyorById(dispatch, navigation.getParam('id', ''));
    const { latest_measurement: latestMeasurement, chart_data: chartData } = conveyor.details;

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
        <Swiper
          style={{ height: Dimensions.get('window').height - 120 }}
          loadMinimal
          loadMinimalSize={0}
          loop={Platform.OS !== 'ios'}
          activeDotColor={greyText}
          dotColor={inactiveDotGrey}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 20 }}>
              {volumeSumMeasurements && (
                <MeasurementDetailComponent
                  lineColor={blue}
                  label="Volume Flow Rate"
                  value={avgVolumeFlow}
                  units={'dm\u00B3/h'}
                />
              )}
              {volumeSumMeasurements && (
                <MeasurementDetailComponent lineColor={red} label="Conveyor Speed" value={conveyorSpeed} units="mm/s" />
              )}
            </View>
            <View style={styles.graphOuterView}>
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
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 20 }}>
              <MeasurementDetailComponent lineColor={orange} label="Volume Sum" value={volumeSum} units={'dm\u00B3'} />
              <MeasurementDetailComponent lineColor={red} label="Conveyor Speed" value={conveyorSpeed} units="mm/s" />
            </View>
            <View style={styles.graphOuterView}>
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
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 20 }}>
              <MeasurementDetailComponent
                lineColor={blue}
                label="Volume Flow Rate"
                value={avgVolumeFlow}
                units={'dm\u00B3/h'}
              />
              <MeasurementDetailComponent lineColor={orange} label="Volume Sum" value={volumeSum} units={'dm\u00B3'} />
            </View>
            <View style={styles.graphOuterView}>
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
          </View>
        </Swiper>
      </ScrollView>
    </GradientHeaderComponent>
  );
};

export default ScannerAnalyticsScreen;
