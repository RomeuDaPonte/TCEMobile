import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableHighlightBase,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import UseIconNavigationReducer from "../reducers/useIconNavigationReducer";

const IconNavigator = ({ navigationContext }) => {
  const [state, dispatch] = UseIconNavigationReducer();

  function handleIconPress(e) {
    dispatch({ type: "touched", iconName: e._targetInst.key });
    navigationContext.current &&
      navigationContext.current.navigate(e._targetInst.key);
  }

  return (
    <View style={[styles.navigation]}>
      <TouchableWithoutFeedback onPress={handleIconPress}>
        <View key="ListOfExpenses" style={styles.logoPlaceholder}>
          <MaterialCommunityIcons
            name="view-list"
            size={30}
            color={state.ListOfExpenses}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleIconPress}>
        <View key="NewUser" style={styles.logoPlaceholder}>
          <MaterialCommunityIcons
            name="account-plus"
            size={30}
            color={state.NewUser}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleIconPress}>
        <View key="Settings" style={styles.logoPlaceholder}>
          <MaterialCommunityIcons
            name="settings"
            size={30}
            color={state.Settings}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleIconPress}>
        <View key="Search" style={styles.logoPlaceholder}>
          <MaterialCommunityIcons
            name="table-search"
            size={30}
            color={state.Search}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handleIconPress}>
        <View key="NewExpense" style={styles.logoPlaceholder}>
          <MaterialCommunityIcons
            name="plus"
            size={30}
            color={state.NewExpense}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  logoPlaceholder: {
    padding: 10,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default IconNavigator;
