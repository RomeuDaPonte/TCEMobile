import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";

import Validation from "../../schemas/ExpenseSchema";
import PickerItem from "../../components/PickerItem";
import AppText from "../../components/appText";
import colors from "../../LayoutHelpers/colors";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../../components/forms";
import items from "../../Constants/sourcesOfExpenses";
import payment from "../../Constants/paymentMethods";
import AppFormDatePicker from "../../components/forms/AppFormDatePicker";
import AppFormCheckbox from "../../components/forms/AppFormCheckbox";
import { UseCurrentUser } from "../../customHooks/useCurrentUser";
import expenseService from "../../services/expenseService";
import { useListOfExpensesValue } from "../../contexts/listOfExpensesContext";

const NewExpense = ({ navigation }) => {
  const { listOfExpenses, setListOfExpenses } = useListOfExpensesValue();
  const { currentUser } = UseCurrentUser();
  const [err, setErr] = useState();

  function addExpense(newExpense) {
    const newListOfExpenses = [newExpense, ...listOfExpenses];
    setListOfExpenses(newListOfExpenses);
    navigation.navigate("ListOfExpenses");
  }

  function handleSubmit(values) {
    values.userId = currentUser._id;
    expenseService
      .newExpense(values)
      .then((res) => addExpense(res.data))
      .catch((err) => setErr(err.response.data));
  }

  return (
    <KeyboardAvoidingView behavior="position" style={styles.view}>
      <AppForm
        initialValues={{
          source: "",
          amount: "",
          description: "",
          paymentMethod: "",
          date: new Date(),
          isPaid: true,
        }}
        onSubmit={handleSubmit}
        validationSchema={Validation.expenseSchema}
      >
        <AppFormPicker
          items={items.sourcesOfExpenses}
          name="source"
          PickerItemComponent={PickerItem}
          placeholder="Fonte de despesa"
          width="100%"
        />
        <AppFormField
          keyboardType="numeric"
          maxLenght={8}
          name="amount"
          placeholder="Preço"
        />
        <AppFormPicker
          items={payment.paymentMethods}
          name="paymentMethod"
          PickerItemComponent={PickerItem}
          placeholder="Modo de pagamento"
          width="100%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Descrição"
        />
        <AppFormDatePicker name="date" />
        <AppFormCheckbox checkBoxText="Pago" name="isPaid" />
        <View style={styles.submitButton}>
          <AppSubmitButton title="Add despesa" />
        </View>
      </AppForm>
      <AppText style={styles.errorMessage}>{err}</AppText>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.danger,
    alignSelf: "center",
  },
  submitButton: { paddingVertical: 15 },
  view: {
    padding: 20,
  },
});
export default NewExpense;
