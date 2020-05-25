import React from "react";
import AppDatePicker from "../AppDatePicker";
import { useFormikContext } from "formik";

const AppFormDatePicker = ({ name }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <AppDatePicker
      name={name}
      value={values[name]}
      setFieldValue={setFieldValue}
    />
  );
};

export default AppFormDatePicker;
