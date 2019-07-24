import { Text, View } from 'react-native';
import React, { Fragment } from 'react';
import { elevationShadowStyle } from '../Styles';

const MeasurementDetailComponent = props => {
  const { lineColor, label, units, value } = props;
  console.log(value);
  return (
    <View
      style={{ backgroundColor: 'white', borderRadius: 6, ...elevationShadowStyle(2), paddingBottom: 20, width: '44%' }}
    >
      {value !== null ? (
        <Fragment>
          <Text style={{ paddingLeft: 15, paddingTop: 20, paddingRight: 15 }}>{label}</Text>
          <Text style={{ fontSize: 16, color: lineColor, paddingLeft: 15, paddingRight: 15 }}>
            {value} {units}
          </Text>
        </Fragment>
      ) : (
        <Text>Activity indicator</Text>
      )}
    </View>
  );
};

export default MeasurementDetailComponent;
