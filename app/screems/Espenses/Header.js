import React from "react";
import { StyleSheet } from "react-native";
import { Header, Body } from "native-base";

import colors from "../../LayoutHelpers/colors";
import AppText from "../../components/appText";
import useTotalSpent from "../../customHooks/useTotalSpent";
import { useListOfExpensesValue } from "../../contexts/listOfExpensesContext";

const ExpensesHeader = () => {
  const { listOfExpenses } = useListOfExpensesValue();
  const { totalSpent } = useTotalSpent(listOfExpenses);

  return (
    <Header androidStatusBarColor={colors.primary} style={styles.header}>
      <Body style={styles.headerBody}>
        <AppText style={styles.headerTitle}>Despendeu: {totalSpent} € </AppText>
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

export default ExpensesHeader;
