// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { bgColor, bgGradientStartLogin, bottomBorder } from '../Colors';

const styles = StyleSheet.create({
  outerView: {
    height: '100%',
    backgroundColor: bgColor
  },
  linearGradientHeight: {
    height: '100%'
  }
});

type Props = {
  children: React.Node
};

const GradientBackground = ({ children }: Props) => (
  <View style={styles.outerView}>
    <LinearGradient style={styles.linearGradientHeight} colors={[bgGradientStartLogin, bottomBorder]} />
    {children}
  </View>
);

export default GradientBackground;
