// @flow
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useNavigationEvents } from 'react-navigation-hooks';

import { getConveyors } from '../services/ConveyorsService';
import { useStore } from '../context/StateContext';

import { elevationShadowStyle } from '../Styles';
import GradientHeaderComponent from '../components/GradientHeaderComponent';
import ConveyorStatusSvgCircle from '../components/ConveyorStatusSvgCircle';
import { greyText, statusColorGreen, statusColorRed, white } from '../Colors';
import fontStyles from '../utils/FontUtils';
import { ConveyorDetailsPath } from '../navigation/Paths';
import { CONVEYOR_LOAD_START } from '../reducers/Actions';

const styles = StyleSheet.create({
  flatList: {
    zIndex: 2,
    bottom: 32
  },
  listItemView: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: white,
    marginHorizontal: 16,
    zIndex: 3,
    marginBottom: 5,
    ...elevationShadowStyle(2)
  },
  touchableOpacityPadding: {
    paddingBottom: 16,
    marginTop: 10
  },
  statusCircle: {
    alignSelf: 'flex-end',
    marginRight: 10
  },
  conveyorNameText: {
    marginTop: -5,
    marginLeft: 18,
    ...fontStyles.fontBold,
    fontSize: 13
  },
  conveyorStatusText: {
    marginLeft: 18,
    marginTop: 4,
    color: greyText,
    ...fontStyles.fontMedium,
    fontSize: 13
  },
  conveyorStatusGreenText: {
    color: statusColorGreen,
    ...fontStyles.fontMedium,
    fontSize: 13
  },
  conveyorStatusRedText: {
    color: statusColorRed,
    ...fontStyles.fontMedium,
    fontSize: 13
  },
  emptyView: {
    height: 9
  }
});

type ListItemProps = {
  item: {
    id: string,
    name: string,
    latest_measurement: {
      scanner_status: string
    }
  }
};

const ConveyorsListScreen = () => {
  const { navigate } = useNavigation();
  const [{ conveyors }, dispatch] = useStore();

  useEffect(() => {
    getConveyors(dispatch);
  }, []);

  const reload = () => {
    getConveyors(dispatch);
  };

  useNavigationEvents(event => {
    if (event.action.routeName === ConveyorDetailsPath && event.type === 'willBlur') {
      dispatch({ type: CONVEYOR_LOAD_START });
    }
  });

  const renderListItem = ({ item }: ListItemProps) => (
    <View style={styles.listItemView}>
      <TouchableOpacity
        style={styles.touchableOpacityPadding}
        onPress={() =>
          navigate(ConveyorDetailsPath, {
            id: item.id,
            title: item.name
          })
        }
      >
        {item.latest_measurement ? (
          <ConveyorStatusSvgCircle
            style={styles.statusCircle}
            fill={item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? statusColorGreen : statusColorRed}
          />
        ) : (
          <View style={styles.emptyView} />
        )}

        <Text style={styles.conveyorNameText}>{item.name.toUpperCase()}</Text>
        <Text style={styles.conveyorStatusText}>
          Status:{' '}
          {item.latest_measurement ? (
            item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? (
              <Text style={styles.conveyorStatusGreenText}>{item.latest_measurement.scanner_status}</Text>
            ) : (
              <Text style={styles.conveyorStatusRedText}>{item.latest_measurement.scanner_status}</Text>
            )
          ) : (
            'No measurements'
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <GradientHeaderComponent>
      <FlatList
        refreshing={conveyors.loading}
        onRefresh={() => reload()}
        style={styles.flatList}
        data={conveyors.data}
        keyExtractor={item => String(item.id)}
        renderItem={renderListItem}
      />
    </GradientHeaderComponent>
  );
};

export default ConveyorsListScreen;
