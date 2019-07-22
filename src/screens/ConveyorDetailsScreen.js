import React, { useState } from 'react';
import { Platform, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useNavigationEvents } from 'react-navigation-hooks';

import ConveyorDetailsForm from '../components/ConveyorDetailsForm';
import VolumeStreamComponent from '../components/VolumeStreamComponent';
import { useStore } from '../context/StateContext';
import { getConveyorById } from '../services/ConveyorsService';

import { elevationShadowStyle } from '../Styles';
import { greenIconColor, white } from '../Colors';
import GradientHeaderComponent from '../components/GradientHeaderComponent';
import fontStyles from '../utils/FontUtils';
import { ScannerAnalyticsPath } from '../navigation/Paths';
import { CONVEYOR_LOAD_START } from '../reducers/Actions';

const styles = StyleSheet.create({
  scrollView: {
    flex: 4,
    zIndex: 2,
    bottom: 32
  },
  volumeStreamWrapperView: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 6,
    marginHorizontal: 15,
    marginTop: 0,
    backgroundColor: white,
    ...elevationShadowStyle(Platform.OS === 'ios' ? 2 : 5),
    marginBottom: 4,
    paddingVertical: 15,
    alignItems: 'center'
  },
  analyticsView: {
    backgroundColor: white,
    flex: 0.17,
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 2
  },
  analyticsTouchableOpacity: {
    margin: 22,
    paddingVertical: Platform.OS === 'ios' ? 0 : 5,
    alignItems: 'center',
    flex: Platform.OS === 'ios' ? 0.7 : 0.8,
    backgroundColor: greenIconColor,
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    ...elevationShadowStyle(2)
  },
  analyticsText: {
    color: white,
    ...fontStyles.fontMedium
  }
});

const ConveyorDetailsScreen = () => {
  const navigation = useNavigation();
  const [{ conveyor }, dispatch] = useStore();
  const [removeTimer, setRemoveTimer] = useState(null);
  const [refresh, setRefresh] = useState(true);

  const reload = () => {
    getConveyorById(dispatch, navigation.getParam('id', ''), true, setRefresh);
  };

  useNavigationEvents(event => {
    if (event.type === 'willFocus') {
      dispatch({ type: CONVEYOR_LOAD_START });
      setRefresh(true);
    }
    if (event.type === 'didFocus') {
      reload();

      const timer = setInterval(() => getConveyorById(dispatch, navigation.getParam('id', ''), false), 1000);
      setRemoveTimer({ remove: () => clearInterval(timer) });
    }
    if (event.type === 'willBlur' && removeTimer !== null) {
      removeTimer.remove();
      dispatch({ type: CONVEYOR_LOAD_START });
    }
    if (event.type === 'didBlur') {
      dispatch({ type: CONVEYOR_LOAD_START });
      setRefresh(true);
    }
  });

  return (
    <GradientHeaderComponent>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              reload();
            }}
          />
        }
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {conveyor.loading ? null : (
          <View style={styles.volumeStreamWrapperView}>
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
        <View style={styles.analyticsView}>
          <TouchableOpacity
            style={styles.analyticsTouchableOpacity}
            onPress={() => {
              navigation.navigate(ScannerAnalyticsPath);
            }}
          >
            <Text style={styles.analyticsText}>ANALYTICS</Text>
          </TouchableOpacity>
        </View>
      )}
    </GradientHeaderComponent>
  );
};

export default ConveyorDetailsScreen;
