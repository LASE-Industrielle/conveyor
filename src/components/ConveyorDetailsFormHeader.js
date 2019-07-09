// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import fontStyles from '../utils/FontUtils';
import { black } from '../Colors';

const styles = StyleSheet.create({
  headerWrapper: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  textStyle: {
    color: black,
    ...fontStyles.fontBold
  }
});

type Props = {
  formHeader: string
};

const ConveyorDetailsFormHeader = ({ formHeader }: Props) => (
  <View style={styles.headerWrapper}>
    <Text style={styles.textStyle}>{formHeader}</Text>
  </View>
);

export default ConveyorDetailsFormHeader;
