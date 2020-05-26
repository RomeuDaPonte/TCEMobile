import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../LayoutHelpers/colors";
import AppText from "../../components/appText";

const IconNavigation = ({ handleIconNavigation, isHighlighted }) => {
  function handleTouch(e) {
    handleIconNavigation(e._targetInst.key);
  }

  return (
    <View style={styles.navigation}>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="listOfExpenses">
          <MaterialCommunityIcons
            color={isHighlighted.listOfExpenses}
            name="view-list"
            size={50}
          />
          <AppText
            style={[styles.appText, { color: isHighlighted.listOfExpenses }]}
          >
            U/Despe
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="newUser">
          <MaterialCommunityIcons
            name="account-plus"
            size={50}
            color={isHighlighted.newUser}
          />
          <AppText style={[styles.appText, { color: isHighlighted.newUser }]}>
            Add User
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="search">
          <MaterialCommunityIcons
            name="table-search"
            size={50}
            color={isHighlighted.search}
          />
          <AppText style={[styles.appText, { color: isHighlighted.search }]}>
            Pesq
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="newExpense">
          <MaterialCommunityIcons
            color={isHighlighted.newExpense}
            name="plus"
            size={50}
          />
          <AppText
            style={[styles.appText, { color: isHighlighted.newExpense }]}
          >
            N/Desp/
          </AppText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  appText: {
    alignSelf: "center",
  },
  navigation: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default IconNavigation;
