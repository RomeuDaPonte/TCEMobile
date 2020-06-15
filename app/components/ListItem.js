import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../LayoutHelpers/colors";
import AppText from "./appText";
import helperExpenses from "../Constants/sourcesOfExpenses";

const ListItem = ({ item, onPress, renderRightActions }) => {
  const icon = helperExpenses.mappingItemToIcon(item);

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              color={icon.backgroundColor}
              name={icon.icon}
              size={25}
            />
          )}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {item.source}
            </AppText>
            <AppText style={styles.subTitle} numberOfLines={2}>
              {item.amount} €
            </AppText>
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "600",
  },
});

export default ListItem;
