import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import ZodiacLoader from "../../../shared/components/loader";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F4F6" />
      <ZodiacLoader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },
});

export default LoadingScreen;
