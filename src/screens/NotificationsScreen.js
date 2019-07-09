import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { bgGradientStart, bgGradientEnd, greyText, bgColor } from '../Colors';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  notificationsContainer: { backgroundColor: 'transparent', width: '100%', height: '100%' },
  bgStyle: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 0 : 32,
    zIndex: 1,
    backgroundColor: bgColor,
    flex: 1,
    width: '100%',
    height: '100%'
  },
  gradient: { height: 134 },
  notificationsBackground: {
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    marginTop: Platform.OS === 'ios' ? 134 : 32
  }
});

const NotificationsScreen = () => {
  return (
    <View style={styles.notificationsContainer}>
      <View style={styles.bgStyle}>
        {Platform.OS === 'ios' ? (
          <LinearGradient style={styles.gradient} colors={[bgGradientStart, bgGradientEnd]} />
        ) : null}
      </View>
      <View style={styles.notificationsBackground}>
        <Text style={{ color: greyText }}>Demonstration purposes only</Text>
        <Text style={{ color: greyText }}>(Notifications not included in demo)</Text>
      </View>
    </View>
  );
};

export default NotificationsScreen;
