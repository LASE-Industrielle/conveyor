import React from "react";
import Svg, {
  Defs,
  ClipPath,
  Path,
  LinearGradient,
  Stop,
  G,
  Text,
  TSpan,
  Circle
} from "react-native-svg";

const GraphComponent = props => (
  <Svg width={328} height={348} {...props}>
    <Defs>
      <ClipPath id="prefix__a">
        <Path data-name="Rectangle 1501" fill="#fff" d="M0 0h328v212H0z" />
      </ClipPath>
      <LinearGradient
        id="prefix__b"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#6cc799" stopOpacity={0.4} />
        <Stop offset={1} stopColor="#6cc799" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="prefix__c">
        <Path
          data-name="Path 665"
          d="M324 348H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h320a4 4 0 0 1 4 4v340a4 4 0 0 1-4 4z"
          fill="#fff"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 289">
      <G data-name="Group 210">
        <G data-name="Group 223">
          <G
            data-name="Group 196"
            fill="none"
            stroke="#e8e6ea"
            strokeDasharray="2"
          >
            <Path data-name="Path 463" d="M20 264h288" />
            <Path data-name="Path 464" d="M20 234h288" />
            <Path data-name="Path 465" d="M20 204h288" />
            <Path data-name="Path 468" d="M102 297V34" />
            <Path data-name="Path 469" d="M164 297V34" />
            <Path data-name="Path 471" d="M226 297V34" />
            <Path data-name="Path 667" d="M288 297V34" />
            <Path data-name="Path 466" d="M20 174h288" />
            <Path data-name="Path 470" d="M20 144h288" />
            <Path data-name="Path 472" d="M20 114h288" />
            <Path data-name="Path 473" d="M20 84h288" />
            <Path data-name="Path 474" d="M20 54h288" />
          </G>
        </G>
      </G>
      <Path data-name="Rectangle 1488" fill="#6cc799" d="M40 294h268v3H40z" />
      <Path data-name="Path 462" d="M40 297V34" fill="none" stroke="#6cc799" />
      <G data-name="Group 276">
        <G
          data-name="Mask Group 7"
          transform="translate(0 91)"
          clipPath="url(#prefix__a)"
        >
          <Path
            data-name="Path 664"
            d="M335.16 61.648S310.539 98.3 295.408 97.916s-9.824-17.2-28.076-21.468C256.29 73.866 251.08 90.134 245 104.538c-3.773 8.937-7.151 18.459-15.575 17.015-21.327-3.658-37.715-74.383-59.439-79.044s-30 38.432-49.454 34.15S79.44 8.7 61.307 14.854 46 38.207 29.139 46.16c-3.3 1.559-6.733-.144-9.967-.918C7.445 42.449-.611 26.484-.611 26.484L0 182h336z"
            transform="translate(-5 21)"
            opacity={0.496}
            fill="url(#prefix__b)"
          />
        </G>
        <G
          data-name="Mask Group 8"
          clipPath="url(#prefix__c)"
          fill="none"
          stroke="#6cc799"
          strokeWidth={1.5}
        >
          <Path
            data-name="Path 663"
            d="M-4.557 142.391s10.248 15.777 25.418 16.155 20.452-34.422 39.868-31.738 33.824 58.018 55.16 61.678 27.621-39.047 49.348-34.354 37.493 74.951 56.95 79.24 17.625-38.088 35.72-44.209 19.806 27.711 36.661 19.725 36.108-35.624 36.108-35.624"
          />
          <Path
            data-name="Path 666"
            d="M-22.248 87.583h0s13.23-13.823 26.393-.761c10.711 10.63 10.83 33.756 22.235 49.162 3.335 4.165 9.992 11.674 21.476 11.961 15.17.378 22.458-32.821 41.874-30.136s33.824 58.018 55.16 61.678 27.621-39.047 49.348-34.354 37.493 74.951 56.95 79.24 22.428-45.83 40.522-51.951 15 35.453 31.858 27.467 36.108-35.624 36.108-35.624"
            opacity={0.23}
          />
        </G>
        <G data-name="Path 429" fill="rgba(0,162,79,0.1)">
          <Path d="M79.5 154.75c-5.652 0-10.25-4.598-10.25-10.25s4.598-10.25 10.25-10.25 10.25 4.598 10.25 10.25-4.598 10.25-10.25 10.25z" />
          <Path
            d="M79.5 134.5c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10m0-.5c5.799 0 10.5 4.701 10.5 10.5S85.299 155 79.5 155 69 150.299 69 144.5 73.701 134 79.5 134z"
            fill="#a6dec1"
          />
        </G>
        <Path
          data-name="Path 6"
          d="M79.5 140a4.5 4.5 0 1 1-4.5 4.5 4.5 4.5 0 0 1 4.5-4.5z"
          fill="#6cc799"
        />
      </G>
      <G data-name="Group 277" transform="translate(2277 1117)">
        <Text
          data-name="Scanner 1"
          transform="translate(-2219 -797)"
          fill="#797979"
          fontSize={12}
          fontFamily="HelveticaNeue, Helvetica Neue"
        >
          <TSpan x={0} y={0}>
            {"Scanner 1"}
          </TSpan>
        </Text>
        <Circle
          data-name="Ellipse 1"
          cx={5}
          cy={5}
          r={5}
          transform="translate(-2237 -806)"
          fill="#6cc799"
        />
      </G>
    </G>
  </Svg>
);

export default GraphComponent;
