import React from "react";
import { View, StyleSheet } from "react-native";
import { DatePicker } from "native-base";

import colors from "../LayoutHelpers/colors";

const AppDatePicker = ({ name, setFieldValue, ...otherProps }) => {
  function getFormatedDefaultDate() {
    const data = new Date().toISOString().slice(0, 10);
    const dia = data.slice(0, 4);
    const mes = data.slice(5, 7) - 1;
    const ano = data.slice(8, 10);

    return new Date(dia, mes, ano);
  }

  return (
    <View style={styles.view}>
      <DatePicker
        name={name}
        defaultDate={getFormatedDefaultDate()}
        locale={"pt"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        placeHolderText={`${new Date().toISOString().slice(0, 10)}`}
        placeHolderTextStyle={{
          color: colors.medium,
          fontSize: 20,
          marginLeft: -5,
          padding: 0,
        }}
        onDateChange={(d) => setFieldValue(name, d.toISOString().slice(0, 10))}
        disabled={false}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    marginBottom: 10,
  },
  view: {
    flex: 0.2,
    backgroundColor: colors.light,
    padding: 15,
    marginVertical: 10,
  },
});
export default AppDatePicker;
