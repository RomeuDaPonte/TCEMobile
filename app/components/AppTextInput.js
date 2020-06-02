import React from "react";
import { StyleSheet } from "react-native";
import { Item, Input, View } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../LayoutHelpers/styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <Item rounded style={styles.item}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}

      <Input {...otherProps} />
    </Item>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  item: {
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 10,
  },
});

export default AppTextInput;
