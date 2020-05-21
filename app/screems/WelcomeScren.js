import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../LayoutHelpers/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/Logo.png")} />
        <Text style={styles.tagLine}>Controla as tuas despesas!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton title="Register" color="secondary" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoContainer: {
    marginTop: 100,
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    alignSelf: "center",
  },
});

export default WelcomeScreen;
