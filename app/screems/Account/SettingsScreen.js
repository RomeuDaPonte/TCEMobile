import React from "react";
import { Screen } from "react-native-screens";
import { View } from "native-base";
import AppText from "../../components/appText";

const SettingsScreen = () => {
  return (
    <Screen>
      <View>
        <AppText>Settings screen</AppText>
      </View>
    </Screen>
  );
};

export default SettingsScreen;
