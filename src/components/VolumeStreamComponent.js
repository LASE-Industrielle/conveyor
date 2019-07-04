import React from 'react'
import Svg, {
    Defs,
    ClipPath,
    Rect,
    LinearGradient,
    Stop,
    G,
    Text,
    TSpan,
} from 'react-native-svg'
import { bgColor } from '../Colors';

const VolumeStreamComponent = props => (
    <Svg width={296} height={119} {...props}>
        <Defs>
            <ClipPath id="prefix__a">
                <Rect
                    data-name="Rectangle 1526"
                    width={props.percentage * 296 /100}
                    height={8}
                    rx={4}
                    transform="translate(32 174)"
                    fill="#6cc799"
                />
            </ClipPath>
            <LinearGradient
                id="prefix__b"
                y1={0.5}
                x2={1}
                y2={0.5}
                gradientUnits="objectBoundingBox"
            >
                <Stop offset={0} stopColor="#6cc799" stopOpacity={0.8} />
                <Stop offset={1} stopColor="#6bc698" />
            </LinearGradient>
        </Defs>
        <G data-name="Group 316">
            <Text
                data-name="Volume Stream"
                transform="translate(212 12)"
                fill="#262626"
                fontSize={12}
                fontFamily="HelveticaNeue-Medium, Helvetica Neue"
                //fontWeight={500}
            >
                <TSpan x={0} y={0}>
                    {'Volume Stream'}
                </TSpan>
            </Text>
            <Text
                data-name="19% full"
                transform="translate(0 35)"
                fill="#6cc799"
                fontSize={14}
                fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                //fontWeight={700}
            >
                <TSpan x={0} y={0}>
                    {props.percentage + '%'}
                </TSpan>
                <TSpan
                    y={0}
                    fontFamily="HelveticaNeue-Light, Helvetica Neue"
                    //fontWeight={300}
                />
                <TSpan
                    y={0}
                    fontFamily="HelveticaNeue, Helvetica Neue"
                    //fontWeight={400}
                >
                    {' full'}
                </TSpan>
            </Text>
            <G
                data-name="Group 314"
                fill="#656565"
                fontSize={10}
                fontFamily="HelveticaNeue-Medium, Helvetica Neue"
                //fontWeight={500}
                letterSpacing=".02em"
            >
                <Text data-name="80%" transform="translate(225 72)">
                    <TSpan x={0} y={0}>
                        {'80%'}
                    </TSpan>
                </Text>
                <Text data-name="60%" transform="translate(166 72)">
                    <TSpan x={0} y={0}>
                        {'60%'}
                    </TSpan>
                </Text>
                <Text data-name="40%" transform="translate(107 72)">
                    <TSpan x={0} y={0}>
                        {'40%'}
                    </TSpan>
                </Text>
                <Text data-name="20%" transform="translate(48 72)">
                    <TSpan x={0} y={0}>
                        {'20%'}
                    </TSpan>
                </Text>
            </G>
            <G data-name="Group 315">
                <G data-name="Group 313">
                    <Rect
                        data-name="Rectangle 1488"
                        width={296}
                        height={8}
                        rx={4}
                        transform="translate(0 46)"
                        fill={bgColor}
                    />
                </G>
                <G
                    data-name="Mask Group 9"
                    clipPath="url(#prefix__a)"
                    transform="translate(-32 -128)"
                >
                    <Rect
                        data-name="Rectangle 1524"
                        width={296}
                        height={8}
                        rx={4}
                        transform="translate(32 174)"
                        fill="url(#prefix__b)"
                    />
                </G>
            </G>
            <G data-name="Group 302">
                <G
                    data-name="Group 301"
                    fill="#656565"
                    fontSize={12}
                    fontFamily="HelveticaNeue, Helvetica Neue"
                >
                    <Text data-name="Upper limit 7500" transform="translate(0 116)">
                        <TSpan x={0} y={0} letterSpacing=".02em">
                            {'Upper limit '}
                        </TSpan>
                        <TSpan y={0} fill="#aaa9a9" letterSpacing=".02em" />
                        <TSpan
                            y={0}
                            fill="#6cc799"
                            fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                            //fontWeight={700}
                        >
                            {props.upperLimit}
                        </TSpan>
                    </Text>
                    <Text data-name="Lower limit 0" transform="translate(119 116)">
                        <TSpan x={0} y={0}>
                            {'Lower limit '}
                        </TSpan>
                        <TSpan
                            y={0}
                            fill="#6cc799"
                            fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                            //fontWeight={700}
                        >
                            {props.lowerLimit}
                        </TSpan>
                    </Text>
                </G>
            </G>
        </G>
    </Svg>
)

export default VolumeStreamComponent;
