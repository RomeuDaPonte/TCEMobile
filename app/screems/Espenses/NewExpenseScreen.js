import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/appText";

const NewExpense = () => {
  return (
    <View style={styles.view}>
      <AppText>Página de nova despaza</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
export default NewExpense;
