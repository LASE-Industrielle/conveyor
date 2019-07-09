import React from 'react';
import { Circle, G, Path } from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';

import { iconColor } from '../Colors';

const icon = {
  icon: {
    svg: (
      <G>
        <G fill="none">
          <G stroke={iconColor} x={3.56} y={0.462}>
            <Circle cx={4.931} cy={4.931} r={4.931} stroke="none" />
            <Circle cx={4.931} cy={4.931} r={4.231} />
          </G>
          <G>
            <Path d="M.871 17.048a7.62 7.62 0 1 1 7.62 7.62 7.62 7.62 0 0 1-7.62-7.62z" />
            <Path
              fill={iconColor}
              d="M.871 17.048a7.62 7.62 0 1 1 15.24.006v.007a5.548 5.548 0 0 1 0 .011v.04a.697.697 0
                               0 1-.702.688.703.703 0 0 1-.698-.705v-.047c0-3.43-2.79-6.22-6.22-6.22-3.43
                                0-6.22 2.79-6.22 6.22a.7.7 0 1 1-1.4 0z"
            />
          </G>
        </G>
      </G>
    ),
    viewBox: '0 0 17.188 20'
  }
};

const ProfileIcon = () => <SvgIcon fill={iconColor} height={20} width={20} name="icon" svgs={icon} />;

export default ProfileIcon;
