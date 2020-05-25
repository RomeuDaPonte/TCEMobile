import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Container, Content, DatePicker } from "native-base";

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
      <Container>
        <Content>
          <DatePicker
            name={name}
            defaultDate={getFormatedDefaultDate()}
            locale={"pt"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={`${new Date()
              .toISOString()
              .slice(0, 10)} escolher outra`}
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(d) =>
              setFieldValue(name, d.toISOString().slice(0, 10))
            }
            disabled={false}
            {...otherProps}
          />
        </Content>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 0.2,
  },
});
export default AppDatePicker;
