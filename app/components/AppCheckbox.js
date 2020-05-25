import React from "react";
import { View, CheckBox, StyleSheet } from "react-native";
import AppText from "./appText";

const AppCheckbox = ({ checked, setFieldValue, name }) => {
  return (
    <View style={styles.CheckBox}>
      <CheckBox
        value={checked}
        title={"ola"}
        onValueChange={(c) => setFieldValue(name, !checked)}
      />
      <AppText style={styles.appText}>Pago ?</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  appText: {
    fontSize: 21,
  },
  CheckBox: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default AppCheckbox;
