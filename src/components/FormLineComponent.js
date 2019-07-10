import React from 'react';
import { StyleSheet, View } from 'react-native';
import { whiteBorder } from '../Colors';

const styles = StyleSheet.create({
  line: {
    marginHorizontal: 15,
    borderBottomColor: whiteBorder,
    borderBottomWidth: 0.4,
  },
});

const FormLineComponent = () => <View style={styles.line} />;

export default FormLineComponent;
