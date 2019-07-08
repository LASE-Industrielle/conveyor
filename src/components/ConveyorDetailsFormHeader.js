import React from 'react';
import { View, Text, Platform } from 'react-native';

import { black } from '../Colors';

const ConveyorDetailsFormHeader = props => (
  <View
    style={{
      margin: 10,
      justifyContent: 'space-between',
      flexDirection: 'row'
    }}
  >
    <Text
      style={{
        color: black,
        fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'HelveticaNeueBold'
      }}
    >
      {props.formHeader}
    </Text>
  </View>
);

export default ConveyorDetailsFormHeader;
