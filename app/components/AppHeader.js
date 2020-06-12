import React from "react";
import { StyleSheet } from "react-native";
import { Header, Body } from "native-base";

import colors from "../LayoutHelpers/colors";
import AppText from "./appText";

const AppHeader = () => {
  return (
    <Header androidStatusBarColor={colors.primary} style={styles.header}>
      <Body style={styles.headerBody}>
        <AppText style={styles.headerTitle}>Despendeu: 325 € </AppText>
      </Body>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
  },
  headerBody: {
    alignItems: "center",
  },
  headerTitle: {
    color: colors.black,
    fontWeight: "bold",
  },
});

export default AppHeader;
