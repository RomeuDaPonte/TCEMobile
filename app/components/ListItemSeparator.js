import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../LayoutHelpers/colors";

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.black,
  },
});

export default ListItemSeparator;
