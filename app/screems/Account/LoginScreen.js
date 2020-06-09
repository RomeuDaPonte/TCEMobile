import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "../../components/Screen";
import { AppSubmitButton, AppForm, AppFormField } from "../../components/forms";
import AccountSchemas from "../../schemas/AccountSchemas";
import { login } from "../../services/accountService";
import colors from "../../LayoutHelpers/colors";
import AppText from "../../components/appText";
import AppButton from "../../components/AppButton";

const LoginScreen = ({ navigation }) => {
  const [err, setErr] = useState("");

  function handleSubmit(data) {
    login(data.email, data.password)
      .then((user) => navigation.navigate("Index", { user: user }))
      .catch((err) => setErr(err.response.data));
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={AccountSchemas.loginSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton title="Login" />
        <AppText style={styles.errorMessage}>{err}</AppText>
      </AppForm>
      <AppButton
        title="Registar"
        onPress={() => navigation.navigate("Register")}
        color="secondary"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  errorMessage: {
    color: colors.danger,
    alignSelf: "center",
  },
});

export default LoginScreen;
