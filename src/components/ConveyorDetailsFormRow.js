// @flow
import React from 'react';
import { View, Text } from 'react-native';

import { orange, inactiveText, bottomBorder } from '../Colors';

type Props = {
  title: String,
  item1: string,
  item2: string
};

const ConveyorDetailsFormRow = ({ title, item1, item2 } : Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
      }}
    >
      <Text style={{ flex: 1 }}>{title}</Text>
      <View
        style={{
          flex: 0.1,
          borderLeftWidth: 1,
          borderLeftColor: orange
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            color: bottomBorder
          }}
        >
          {item1}
        </Text>
        <Text
          style={{
            color: inactiveText
          }}
        >
          {item2}
        </Text>
      </View>
    </View>
  );
};

export default ConveyorDetailsFormRow;
