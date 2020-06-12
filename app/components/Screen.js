import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.sreen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sreen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
