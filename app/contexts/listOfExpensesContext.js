import React, { createContext, useContext } from "react";

import { UseListOfExpenses } from "../customHooks/useListOfExpenses";

export const ListOfExpensesContext = createContext(null);

export const ListOfExpensesProvider = (props) => {
  const { listOfExpenses, setListOfExpenses } = UseListOfExpenses();

  return (
    <ListOfExpensesContext.Provider
      value={{ listOfExpenses, setListOfExpenses }}
    >
      {props.children}
    </ListOfExpensesContext.Provider>
  );
};

export const useListOfExpensesValue = () => useContext(ListOfExpensesContext);
