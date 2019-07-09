// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

import { elevationShadowStyle } from '../Styles';
import fontStyles from '../utils/FontUtils';
import { greyText, statusColorGreen, statusColorRed, white } from '../Colors';

const styles = StyleSheet.create({
  statusFormContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: white,
    zIndex: 2,
    fontSize: 13,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 6,
    margin: 10,
    marginTop: 0,
    ...fontStyles.fontMedium,
    ...elevationShadowStyle(2)
  },
  statusCircle: { alignSelf: 'center', marginLeft: 10, marginRight: 12 },
  statusText: { flex: 1, color: greyText }
});

const ConveyorStatusForm = ({ status }: { status: string }) => {
  const color = status === 'OK' ? statusColorGreen : statusColorRed;
  return (
    <View style={styles.statusFormContainer}>
      <Svg height="9" width="9" viewBox="0 0 100 100" style={styles.statusCircle}>
        <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill={color} />
      </Svg>
      <Text style={styles.statusText}>
        {'Status: '}
        <Text style={{ color }}>{status}</Text>
      </Text>
    </View>
  );
};

export default ConveyorStatusForm;
