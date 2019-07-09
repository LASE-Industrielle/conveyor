// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { bottomBorder, inactiveText, orange } from '../Colors';

const styles = StyleSheet.create({
  wholeFormRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  orangeLine: {
    flex: 0.1,
    borderLeftWidth: 1,
    borderLeftColor: orange
  },
  titleStyle: { flex: 1 },
  rightFormRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightFormRowLeftTextColor: { color: bottomBorder },
  rightFormRowRightTextColor: { color: inactiveText }
});

type Props = {
  title: string,
  item1: string,
  item2: string
};

const ConveyorDetailsFormRow = ({ title, item1, item2 }: Props) => (
  <View style={styles.wholeFormRowContainer}>
    <Text style={styles.titleStyle}>{title}</Text>
    <View style={styles.orangeLine} />
    <View style={styles.rightFormRowContainer}>
      <Text style={styles.rightFormRowLeftTextColor}>{item1}</Text>
      <Text style={styles.rightFormRowRightTextColor}>{item2}</Text>
    </View>
  </View>
);

export default ConveyorDetailsFormRow;
