import React from 'react'
import {G, Path} from "react-native-svg";
import SvgIcon from "react-native-svg-icon";
import {secondaryText} from "../Colors";

const icon = {
    icon: {
        svg: (
            <G>
                <Path d="M11.632 12.028V7a5.192 5.192 0 0 0-3.677-4.956v-.45A1.554 1.554
                 0 0 0 6.449 0a1.554 1.554 0 0 0-1.506 1.594v.449A5.192 5.192 0 0 0 1.267
                  7v5.024A1.491 1.491 0 0 0 0 13.5v.778a.606.606 0 0 0 .606.605h3.629a2.268
                   2.268 0 0 0 4.429 0h3.629a.606.606 0 0 0 .606-.605V13.5a1.491 1.491 0 0
                    0-1.267-1.472zM5.919 1.594a.58.58 0 0 1 .53-.618.58.58 0 0 1 .53.618v.253a5.232
                     5.232 0 0 0-1.061 0zM2.243 7a4.206 4.206 0 1 1 8.413 0v5.008H2.243zm4.206
                      8.684a1.294 1.294 0 0 1-1.2-.8h2.396a1.294 1.294 0 0
                       1-1.196.803zm5.473-1.78H.976V13.5a.513.513 0 0 1 .513-.513h9.921a.513.513
                        0 0 1 .513.513zm0 0"/>
            </G>
        ),
        viewBox: '0 0 12.899 16.664'
    }
};

const NotificationIcon = props => <SvgIcon fill={secondaryText} height={22} width={22} name={'icon'} {...props}
                                        svgs={icon}>{props.children}</SvgIcon>;

export default NotificationIcon;
