import React from "react";
import { View, StyleSheet } from "react-native";
import * as AuthSession from "expo-auth-session";
import Button from "../components/Button";

const Onboarding = () => {
  // const [] = AuthSession.useAuthRequest({}, {});
  const signUp = async () => {
    const r = await AuthSession.startAsync({
      authUrl: "https://identity.bitclout.com",
    });
    console.log({ r });
  };
  const logIn = async () => {};

  return (
    <View style={styles.container}>
      <Button onPress={signUp}>Sign Up</Button>
      <Button onPress={logIn}>Log In</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Onboarding;
