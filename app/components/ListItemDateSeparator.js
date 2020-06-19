import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../LayoutHelpers/colors";
import AppText from "./appText";

const ListItemDateSeparator = ({ date, otherStyles }) => {
  return (
    <View style={[styles.separatorConteiner, otherStyles]}>
      <View style={styles.separator} />
      <AppText style={styles.data}>{date.slice(0, 10)}</AppText>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  data: {
    marginHorizontal: 5,
  },
  separator: {
    marginTop: 12,
    flex: 1,
    height: 1,
    backgroundColor: colors.black,
  },
  separatorConteiner: {
    backgroundColor: "white",
    flexDirection: "row",
  },
});

export default ListItemDateSeparator;
