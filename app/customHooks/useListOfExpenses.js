import { useState, useEffect } from "react";

import expenseService from "../services/expenseService";
import { getCurrentUser } from "../services/accountService";

export const UseListOfExpenses = () => {
  const [listOfExpenses, setListOfExpenses] = useState();

  useEffect(() => {
    (function () {
      getCurrentUser()
        .then((user) => {
          expenseService
            .getListOfExpenses(user._id)
            .then((res) => setListOfExpenses(res.data))
            .catch((error) => setListOfExpenses(error.response.data));
        })
        .catch((er) => listOfExpenses(er));
    })();
  }, []);

  return { listOfExpenses };
};
