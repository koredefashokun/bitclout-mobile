import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../components/Button";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Button />
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Onboarding;
