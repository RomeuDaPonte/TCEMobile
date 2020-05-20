import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../LayoutHelpers/colors";
import AppText from "../../components/appText";
import UseIconNavigationReducer from "../../reducers/useIconNavigationReducer";

const IconNavigation = ({ handleIconTaped }) => {
  const [state, dispatch] = UseIconNavigationReducer();

  function handleTouch(e) {
    dispatch({ type: "touched", iconName: e._targetInst.key });
    handleIconTaped(e._targetInst.key);
  }

  return (
    <View style={styles.navigation}>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="listOfExpenses">
          <MaterialCommunityIcons
            color={state.listOfExpenses}
            name="view-list"
            size={50}
          />
          <AppText style={[styles.appText, { color: state.listOfExpenses }]}>
            U/Despe
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="newUser">
          <MaterialCommunityIcons
            name="account-plus"
            size={50}
            color={state.newUser}
          />
          <AppText style={[styles.appText, { color: state.newUser }]}>
            Add User
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="search">
          <MaterialCommunityIcons
            name="table-search"
            size={50}
            color={state.search}
          />
          <AppText style={[styles.appText, { color: state.search }]}>
            Pesq
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View key="newExpense">
          <MaterialCommunityIcons
            color={state.newExpense}
            name="plus"
            size={50}
          />
          <AppText style={[styles.appText, { color: state.newExpense }]}>
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
