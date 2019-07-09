import React from 'react';
import { Circle, Svg } from 'react-native-svg';

const ConveyorStatusSvgCircle = ({ style, fill }) => (
  <Svg height="9" width="9" viewBox="0 0 100 100" style={style}>
    <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill={fill} />
  </Svg>
);

export default ConveyorStatusSvgCircle;
