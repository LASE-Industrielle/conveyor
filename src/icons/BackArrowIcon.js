import React from 'react';
import { G, Path } from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';

import { iconColor } from '../Colors';

const icon = {
  icon: {
    svg: (
      <G>
        <Path
          d="M7.444 15.674L.228 8.543a.761.761 0 0 1 0-1.086L7.444.326a1.136 1.136 0 0 1 1.593
                 0 1.1 1.1 0 0 1 0 1.573L2.864 8l6.173 6.1a1.106 1.106 0 0 1 0 1.574 1.136 1.136 0 0 1-1.593 0"
        />
      </G>
    ),
    viewBox: '0 0 9.365 16'
  }
};

const BackArrowIcon = () => <SvgIcon fill={iconColor} height={16} width={9.37} name="icon" svgs={icon} />;

export default BackArrowIcon;
