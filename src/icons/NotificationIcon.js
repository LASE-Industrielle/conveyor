// @flow
import React from 'react';
import { G, Path } from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';

import { iconColor } from '../Colors';

const icon = {
  icon: {
    svg: (
      <G>
        <Path
          d="M16.406 15.469h-.781V10a7.043 7.043 0 0
           0-5-6.732 2.266 2.266 0 1 0-4.062 0 7.043 7.043
                 0 0 0-5 6.732v5.469H.781a.781.781 0 1 0 0
                  1.562H4.77A3.756 3.756 0 0 0 8.438 20h.312a3.756 3.756
                  0 0 0 3.668-2.969h3.988a.781.781 0 1 0
                  0-1.562zM7.891 2.266a.7.7 0 1 1 .7.7.7.7 0 0 1-.7-.7zm.859
                   16.172h-.312a2.191 2.191 0
                   0 1-2.043-1.406h4.4a2.191 2.191 0 0 1-2.045 1.406zm-5.625-2.969V10a5.469
                    5.469 0 0 1 10.938 0v5.469zm0 0"
        />
      </G>
    ),
    viewBox: '0 0 17.188 20'
  }
};

type Props = {
  children: Object
};

const NotificationIcon = (props: Props) => {
  const { children } = props;
  return (
    <SvgIcon fill={iconColor} height={20} width={17.2} name="icon" {...props} svgs={icon}>
      {children}
    </SvgIcon>
  );
};

export default NotificationIcon;
