import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../../components/appText";

const NewUser = () => {
  return (
    <View style={styles.view}>
      <AppText>New user screen</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default NewUser;
