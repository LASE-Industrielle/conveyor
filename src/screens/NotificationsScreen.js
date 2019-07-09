import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bgGradientStart, bgGradientEnd, greyText, bgColor } from '../Colors';
import GradientHeaderComponent from '../components/GradientHeaderComponent';

const styles = StyleSheet.create({
  view: {
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  greyText: {
    color: greyText
  }
});

const NotificationsScreen = () => {
  return (
    <GradientHeaderComponent>
      <View style={styles.view}>
        <Text style={styles.greyText}>Demonstration purposes only</Text>
        <Text style={styles.greyText}>(Notifications not included in demo)</Text>
      </View>
    </GradientHeaderComponent>
  );
};

export default NotificationsScreen;
