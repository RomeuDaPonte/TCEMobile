import React, { useState } from "react";
import {
  Platform,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../LayoutHelpers/colors";
import AppText from "../components/appText";

const AppDatePicker = ({ name, value, setFieldValue }) => {
  const date = new Date();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setFieldValue(name, currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={showDatepicker}>
        <View style={styles.container}>
          <AppText style={styles.placeholder}>
            {value.toString().slice(0, 16)}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      {show && (
        <DateTimePicker
          name={name}
          timeZoneOffsetInMinutes={0}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          value={value}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  placeholder: {
    flex: 1,
  },
});
export default AppDatePicker;
