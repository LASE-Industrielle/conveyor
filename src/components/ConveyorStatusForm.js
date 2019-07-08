import React from 'react';
import { View, Text } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

import { elevationShadowStyle } from '../Styles';
import fontStyles from '../utils/FontUtils';
import { greyText, statusColorGreen, statusColorRed } from '../Colors';


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
            ...fontStyles.fontMedium,
            fontSize: 13
          }}
        >
          {'Status: '}
          <Text
            style={{
              color,
              ...fontStyles.fontMedium,
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
