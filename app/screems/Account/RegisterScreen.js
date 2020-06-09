import React from "react";
import { StyleSheet, Image, KeyboardAvoidingView } from "react-native";

import Screen from "../../components/Screen";
import colors from "../../LayoutHelpers/colors";
import { AppForm, AppFormField, AppSubmitButton } from "../../components/forms";
import AppButton from "../../components/AppButton";
import AccountSchemas from "../../schemas/AccountSchemas";

const RegisterScreenn = () => {
  function handleRegister(data) {
    console.log(data);
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/Logo.png")} />
      <KeyboardAvoidingView behavior="position">
        <AppForm
          initialValues={{
            userName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          onSubmit={handleRegister}
          validationSchema={AccountSchemas.registerSchema}
        >
          <AppFormField
            autocapitalize="none"
            autoCorrect={false}
            name="userName"
            icon="account"
            placeholder="Nome do utilizador"
          />
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
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="passwordConfirmation"
            placeholder="Confirmar password"
            secureTextEntry
            textContentType="password"
          />
          <AppSubmitButton title="Registar" />
        </AppForm>
        <AppButton title="Voltar ao login" color="secondary" />
      </KeyboardAvoidingView>
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

export default RegisterScreenn;
