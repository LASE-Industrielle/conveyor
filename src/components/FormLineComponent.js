import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  line: {
    marginHorizontal: 15,
    borderBottomColor: "#E8E6EA",
    borderBottomWidth: 0.4
  }
});

const FormLineComponent = () => <View style={styles.line} />;

export default FormLineComponent;
