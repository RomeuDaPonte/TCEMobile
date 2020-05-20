import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../components/appText";

const ListOfExpenses = () => {
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
