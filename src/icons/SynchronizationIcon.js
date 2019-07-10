import React from 'react';
import { G, Path } from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';

import { iconColor } from '../Colors';

const icon = {
  icon: {
    svg: (
      <G>
        <Path
          d="M11.355 8.854a5.913 5.913 0 0 0-3.592-7.54.448.448 0 1 0-.3.845 5.01 5.01 0 0
                1 .4 9.281l.77-2.172a.448.448 0 0 0-.845-.3l-1.1 3.1a.448.448 0 0 0 .272.572l2.941 1.046a.448.448
                0 0 0 .3-.845l-1.829-.655a5.853 5.853 0 0 0 2.983-3.332zM.507 5.025a5.913 5.913 0 0 0 3.591
                 7.542.448.448 0 1 0 .3-.845 5.01 5.01 0 0 1-.4-9.281l-.77 2.172a.448.448 0 1 0 .845.3l1.1-3.1a.448.448
                 0 0 0-.272-.572L1.96.193a.448.448 0 0 0-.3.845l1.832.65A5.853 5.853 0 0 0 .507 5.025z"
        />
      </G>
    ),
    viewBox: '0 0 11.861 13.861',
  },
};

const SynchronizationIcon = () => (
  <SvgIcon fill={iconColor} height={12} width={14} name="icon" svgs={icon} />
);

export default SynchronizationIcon;
