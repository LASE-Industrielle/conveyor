// @flow
import React from 'react';
import Svg, { ClipPath, Defs, G, LinearGradient, Rect, Stop, Text, TSpan } from 'react-native-svg';
import { bgColor, black, statusColorGreen, statusColorRed } from '../Colors';

type Props = {
  percentage: number,
  upperLimit: number,
  lowerLimit: number
};

const VolumeStreamComponent = ({ percentage, upperLimit, lowerLimit }: Props) => (
  <Svg width={296} height={119}>
    <Defs>
      <ClipPath id="prefix__a">
        <Rect
          data-name="Rectangle 1526"
          width={((percentage > 0 ? percentage : 0) * 296) / 100}
          height={8}
          rx={4}
          transform="translate(32 174)"
          fill={statusColorGreen}
        />
      </ClipPath>
      <LinearGradient id="prefix__b" y1={0.5} x2={1} y2={0.5} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor={statusColorGreen} stopOpacity={0.8} />
        <Stop offset={1} stopColor="#6bc698" />
      </LinearGradient>
    </Defs>
    <G data-name="Group 316">
      <Text
        data-name="Volume Stream"
        transform="translate(212 12)"
        fill={black}
        fontSize={12}
        fontFamily="HelveticaNeue-Medium, Helvetica Neue"
      >
        <TSpan x={0} y={0}>
          {'Volume Stream'}
        </TSpan>
      </Text>
      <Text
        data-name="19% full"
        transform="translate(0 35)"
        fill={percentage === -1 ? statusColorRed : statusColorGreen}
        fontSize={14}
        fontFamily="HelveticaNeue-Bold, Helvetica Neue"
      >
        <TSpan x={0} y={0}>
          {percentage === -1 ? 'Error calculating value' : `${percentage}%`}
        </TSpan>
      </Text>
      <G
        data-name="Group 314"
        fill="#656565"
        fontSize={10}
        fontFamily="HelveticaNeue-Medium, Helvetica Neue"
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
          <Rect data-name="Rectangle 1488" width={296} height={8} rx={4} transform="translate(0 46)" fill={bgColor} />
        </G>
        <G data-name="Mask Group 9" clipPath="url(#prefix__a)" transform="translate(-32 -128)">
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
        <G data-name="Group 301" fill="#656565" fontSize={12} fontFamily="HelveticaNeue, Helvetica Neue">
          <Text data-name="Upper limit 7500" transform="translate(0 116)">
            <TSpan x={0} y={0} letterSpacing=".02em">
              {'Upper limit '}
            </TSpan>
            <TSpan y={0} fill="#aaa9a9" letterSpacing=".02em" />
            <TSpan y={0} fill={statusColorGreen} fontFamily="HelveticaNeue-Bold, Helvetica Neue">
              {`${upperLimit} m\u00B3/h`}
            </TSpan>
          </Text>
          <Text data-name="Lower limit 0" transform="translate(119 116)">
            <TSpan x={0} y={0}>
              {'Lower limit '}
            </TSpan>
            <TSpan y={0} fill={statusColorGreen} fontFamily="HelveticaNeue-Bold, Helvetica Neue">
              {`${lowerLimit} m\u00B3/h`}
            </TSpan>
          </Text>
        </G>
      </G>
    </G>
  </Svg>
);

export default VolumeStreamComponent;
