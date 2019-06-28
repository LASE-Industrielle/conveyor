import React from 'react'
import {G, Path} from "react-native-svg";
import SvgIcon from "react-native-svg-icon";
import {iconColor} from "../Colors";

const icon = {
    icon: {
        svg: (
            <G fill="#f19b93" stroke="#f19b93">
                <Path d="M6.412 11.673H1.678a.526.526 0 0 1-.526-.526V1.678a.526.526 0 0 1 .526-.528h4.734a.526.526
                 0 0 0 0-1.052H1.678A1.58 1.58 0 0 0 .1 1.678v9.472a1.58 1.58 0 0 0 1.578 1.578h4.734a.526.526 0
                  1 0 0-1.052z"/>
                <Path d="M12.609 6.038l-3.2-3.156a.526.526 0 0 0-.739.749l2.286 2.256H4.831a.526.526 0 0 0 0
                 1.052h6.125L8.67 9.195a.526.526 0 1 0 .739.749l3.2-3.156a.526.526 0 0 0 0-.749z"/>
            </G>
        ),
        viewBox: '0 0 12.866 12.825'
    }
};

const LogoutIcon = props => <SvgIcon fill={iconColor} height={13} width={13} name={'icon'} {...props}
                                              svgs={icon}>{props.children}</SvgIcon>;

export default LogoutIcon;

