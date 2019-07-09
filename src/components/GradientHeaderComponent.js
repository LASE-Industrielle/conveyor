import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { bgColor, bgGradientEnd, bgGradientStart, bottomBorder } from '../Colors';

const styles = StyleSheet.create({
  outerView: {
    height: '100%',
    backgroundColor: bgColor
  },
  linearGradientHeight: {
    height: 134
  },
  innerView: {
    bottom: 46,
    opacity: 0.4,
    borderBottomColor: bottomBorder,
    alignSelf: 'stretch',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1
  }
});

const GradientHeaderComponent = ({ children }) => (
  <View style={styles.outerView}>
    <LinearGradient style={styles.linearGradientHeight} colors={[bgGradientStart, bgGradientEnd]}>
      <View style={styles.innerView} />
    </LinearGradient>
    {children}
  </View>
);

export default GradientHeaderComponent;
