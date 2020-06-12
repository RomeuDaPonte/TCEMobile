import React from "react";
import { StyleSheet } from "react-native";
import { Header, Body, Title } from "native-base";

import colors from "../LayoutHelpers/colors";

const AppHeader = () => {
  return (
    <Header androidStatusBarColor={colors.primary} style={styles.header}>
      <Body style={styles.headerBody}>
        <Title style={styles.headerTitle}>Despendeu: 325 €</Title>
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
