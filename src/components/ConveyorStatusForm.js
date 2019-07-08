import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

import { elevationShadowStyle } from '../Styles';
import { greyText, statusColorGreen, statusColorRed, whiteBorder } from '../Colors';

const styles = StyleSheet.create({
  line: {
    marginHorizontal: 15,
    borderBottomColor: whiteBorder,
    borderBottomWidth: 0.4
  },
  formText: {
    fontFamily: 'HelveticaNeue'
  }
});

const ConveyorStatusForm = ({ status }) => {
  const color = status === 'OK' ? statusColorGreen : statusColorRed;
  return (
    <View
      style={{
        flex: 4,
        zIndex: 2,
        paddingVertical: 15,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        borderRadius: 6,
        marginTop: 0,
        backgroundColor: 'white',
        ...elevationShadowStyle(2)
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10
        }}
      >
        <Svg
          height="9"
          width="9"
          viewBox="0 0 100 100"
          style={{ alignSelf: 'center', marginLeft: 10, marginRight: 12 }}
        >
          <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill={color} />
        </Svg>
        <Text
          style={{
            flex: 1,
            color: greyText,
            fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
            fontSize: 13
          }}
        >
          {'Status: '}
          <Text
            style={{
              color,
              fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'HelveticaNeueMedium',
              fontSize: 13
            }}
          >
            {status}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ConveyorStatusForm;
