import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../../components/appText";

const NewUser = () => {
  return (
    <View style={styles.view}>
      <AppText>
        Funcionalidade para adicionar user a uma fonte de despeza não
        implementada
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default NewUser;
