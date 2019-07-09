import React, { useEffect } from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'native-base';

import { getConveyors } from '../services/ConveyorsService';
import { useStore } from '../context/StateContext';

import { elevationShadowStyle } from '../Styles';
import { greyText, statusColorGreen, statusColorRed, white } from '../Colors';
import GradientHeaderComponent from '../components/GradientHeaderComponent';
import ConveyorStatusSvgCircle from '../components/ConveyorStatusSvgCircle';

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
    paddingBottom: 16
  },
  statusCircle: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10
  },
  conveyorNameText: {
    marginTop: -5,
    marginLeft: 18,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'HelveticaNeueBold',
    fontSize: 13
  },
  conveyorStatusText: {
    marginLeft: 18,
    marginTop: 4,
    color: greyText,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
    fontSize: 13
  },
  conveyorStatusGreenText: {
    color: statusColorGreen,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
    fontSize: 13
  },
  conveyorStatusRedText: {
    color: statusColorRed,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
    fontSize: 13
  }
});

const ConveyorsListScreen = props => {
  const [{ conveyors }, dispatch] = useStore();

  useEffect(() => {
    getConveyors(dispatch);
  }, []);

  const reload = () => {
    getConveyors(dispatch);
  };

  const renderListItem = ({ item }) => (
    <View style={styles.listItemView}>
      <TouchableOpacity
        style={styles.touchableOpacityPadding}
        onPress={() =>
          props.navigation.navigate('ConveyorDetails', {
            id: item.id,
            title: item.name
          })
        }
      >
        <ConveyorStatusSvgCircle
          style={styles.statusCircle}
          fill={item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? statusColorGreen : statusColorRed}
        />
        <Text style={styles.conveyorNameText}>{item.name.toUpperCase()}</Text>
        <Text style={styles.conveyorStatusText}>
          Status:{' '}
          {item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? (
            <Text style={styles.conveyorStatusGreenText}>{item.latest_measurement.scanner_status}</Text>
          ) : (
            <Text style={styles.conveyorStatusRedText}>{item.latest_measurement.scanner_status}</Text>
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
