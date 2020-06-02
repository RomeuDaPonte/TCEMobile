import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Validation from "../../schemas/ExpenseSchema";
import PickerItem from "../../components/PickerItem";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import items from "../../Constants/sourcesOfExpenses";
import payment from "../../Constants/paymentMethods";
import AppFormDatePicker from "../../components/forms/AppFormDatePicker";
import AppFormCheckbox from "../../components/forms/AppFormCheckbox";
import { UseCurrentUser } from "../../customHooks/useCurrentUser";

const NewExpense = ({ handleIconNavigation }) => {
  //const { currentUser } = UseCurrentUser();

  return (
    <Screen style={styles.view}>
      <AppForm
        initialValues={{
          source: null,
          amount: "",
          description: "",
          paymentMethod: null,
          date: new Date().toISOString().slice(0, 10),
          isPayed: true,
        }}
        //onSubmit={(values) => console.log(values)}
        onSubmit={() => handleIconNavigation()}
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
        <AppFormCheckbox checkBoxText="Pago" name="isPayed" />
        <View style={styles.submitButton}>
          <AppSubmitButton title="Add despesa" />
        </View>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  submitButton: { paddingVertical: 15 },
  view: {
    padding: 10,
  },
});
export default NewExpense;
