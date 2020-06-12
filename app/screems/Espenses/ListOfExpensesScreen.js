import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../../components/appText";
import { UseListOfExpenses } from "../../customHooks/useListOfExpenses";

const ListOfExpenses = ({ user }) => {
  const { listOfExpenses } = UseListOfExpenses();
  console.log(listOfExpenses);

  return (
    <View style={styles.list}>
      <AppText>Ola lista de despezas</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default ListOfExpenses;
