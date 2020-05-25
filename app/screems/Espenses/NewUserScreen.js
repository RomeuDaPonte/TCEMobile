import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Content, DatePicker } from "native-base";

import AppText from "../../components/appText";
import { date } from "yup";

const NewUser = () => {
  const [data, setData] = useState(new Date().toISOString().slice(0, 10));

  function getFormatedDefaultDate() {
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
            name="data"
            defaultDate={getFormatedDefaultDate()}
            locale={"pt"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={`${data} escolher outra`}
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={(chosenData) =>
              setData(chosenData.toISOString().slice(0, 10))
            }
            disabled={false}
          />
        </Content>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default NewUser;
