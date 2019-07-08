// @flow
import React, { useEffect } from 'react';
import { FlatList, Platform, TouchableOpacity, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Text } from 'native-base';
import { Circle, Svg } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

import { getConveyors } from '../services/ConveyorsService';
import { useStore } from '../context/StateContext';

import { elevationShadowStyle } from '../Styles';
import { bgColor, white, bgGradientEnd, bgGradientStart, statusColorGreen, statusColorRed, greyText } from '../Colors';
import fontStyles from '../utils/FontUtils';

type Props = {
  navigation: NavigationScreenProp<{}>
};

const ConveyorsListScreen = ({ navigation }: Props) => {
  const [{ conveyors }, dispatch] = useStore();

  useEffect(() => {
    getConveyors(dispatch);
  }, []);

  const reload = () => {
    getConveyors(dispatch);
  };

  const renderListItem = ({ item }) =>
    Platform.OS === 'ios' ? (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignSelf: 'stretch',
          backgroundColor: white,
          marginHorizontal: 16,
          zIndex: 3,
          marginBottom: 5,
          ...elevationShadowStyle(2)
        }}
      >
        <TouchableOpacity
          style={{ paddingBottom: 16 }}
          onPress={() =>
            navigation.navigate('ConveyorDetails', {
              id: item.id,
              title: item.name
            })
          }
        >
          <Svg
            height="9"
            width="9"
            viewBox="0 0 100 100"
            style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 10 }}
          >
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill={item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? statusColorGreen : statusColorRed}
            />
          </Svg>
          <Text
            style={{
              marginTop: -5,
              marginLeft: 18,
              ...fontStyles.fontBold,
              fontSize: 13
            }}
          >
            {item.name.toUpperCase()}
          </Text>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 4,
              color: greyText,
              ...fontStyles.fontMedium,
              fontSize: 13
            }}
          >
            Status:{' '}
            {item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? (
              <Text
                style={{
                  color: statusColorGreen,
                  ...fontStyles.fontMedium,
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            ) : (
              <Text
                style={{
                  color: statusColorRed,
                  ...fontStyles.fontMedium,
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignSelf: 'stretch',
          backgroundColor: white,
          marginHorizontal: 16,
          zIndex: 3,
          marginBottom: 5,
          ...elevationShadowStyle(2)
        }}
      >
        <TouchableOpacity
          style={{ paddingBottom: 16 }}
          onPress={() =>
            navigation.navigate('ConveyorDetails', {
              id: item.id,
              title: item.name
            })
          }
        >
          <Svg
            height="9"
            width="9"
            viewBox="0 0 100 100"
            style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 10 }}
          >
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill={item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? statusColorGreen : statusColorRed}
            />
          </Svg>
          <Text
            style={{
              marginTop: -5,
              marginLeft: 18,
              ...fontStyles.fontBold,
              fontSize: 13
            }}
          >
            {item.name.toUpperCase()}
          </Text>
          <Text
            style={{
              marginLeft: 18,
              marginTop: 4,
              color: greyText,
              ...fontStyles.fontMedium,
              fontSize: 13
            }}
          >
            Status:{' '}
            {item.latest_measurement.scanner_status.toUpperCase() === 'OK' ? (
              <Text
                style={{
                  color: statusColorGreen,
                  ...fontStyles.fontMedium,
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            ) : (
              <Text
                style={{
                  color: statusColorRed,
                  ...fontStyles.fontMedium,
                  fontSize: 13
                }}
              >
                {item.latest_measurement.scanner_status}
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    );

  return Platform.OS === 'ios' ? (
    <View style={{ height: '100%' }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          backgroundColor: bgColor,
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <LinearGradient style={{ height: 134 }} colors={[bgGradientStart, bgGradientEnd]} />
      </View>
      <FlatList
        refreshing={conveyors.loading}
        onRefresh={() => reload()}
        style={{ zIndex: 2, marginTop: 102 }}
        data={conveyors.data}
        keyExtractor={item => String(item.id)}
        renderItem={renderListItem}
      />
    </View>
  ) : (
    <View style={{ height: '100%' }}>
      <View
        style={{
          position: 'absolute',
          top: 32,
          zIndex: 1,
          backgroundColor: bgColor,
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      />
      <FlatList
        refreshing={conveyors.loading}
        onRefresh={() => reload()}
        style={{ zIndex: 2 }}
        data={conveyors.data}
        keyExtractor={item => String(item.id)}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default ConveyorsListScreen;
