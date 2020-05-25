import React from "react";
import AppCheckbox from "../AppCheckbox";
import { useFormikContext } from "formik";

const AppFormCheckbox = ({ checkBoxText, name }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <AppCheckbox
      checkBoxText={checkBoxText}
      checked={values[name]}
      name={name}
      setFieldValue={setFieldValue}
    />
  );
};

export default AppFormCheckbox;
