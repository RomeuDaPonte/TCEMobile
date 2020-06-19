import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./appText";
import Icon from "./icon";

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={item.icon}
          size={40}
          backgroundColor={item.backgroundColor}
        />
        <AppText style={styles.appText}>{item.value}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appText: {
    paddingHorizontal: 10,
    fontSize: 30,
  },
  container: {
    paddingVertical: 5,
    flexDirection: "row",
  },
});

export default PickerItem;
