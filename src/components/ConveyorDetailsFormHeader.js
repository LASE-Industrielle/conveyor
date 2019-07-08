// @flow
import React from 'react';
import { View, Text } from 'react-native';

import fontStyles from '../utils/FontUtils';
import { black } from '../Colors';

type Props = {
  formHeader: string
};

const ConveyorDetailsFormHeader = ({ formHeader }: Props) => (
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
      {formHeader}
    </Text>
  </View>
);

export default ConveyorDetailsFormHeader;
