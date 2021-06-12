import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
  onPress(): void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  style,
  textStyle,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, style]}
    disabled={loading}
    activeOpacity={0.7}
  >
    <Text style={[styles.text, textStyle]}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    borderRadius: 6,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});

export default Button;
