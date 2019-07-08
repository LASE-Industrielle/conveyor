import React from 'react';
import { View, Text } from 'react-native';

import fontStyles from '../utils/FontUtils';
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
        ...fontStyles.fontBold
      }}
    >
      {props.formHeader}
    </Text>
  </View>
);

export default ConveyorDetailsFormHeader;
