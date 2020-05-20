import { useReducer } from "react";

import colors from "../LayoutHelpers/colors";

const initialState = {
  listOfExpenses: colors.white,
  newUser: colors.medium,
  search: colors.medium,
  newExpense: colors.medium,
};

const defaultState = {
  ...initialState,
  listOfExpenses: colors.medium,
};

function iconNavigationReducer(state, action) {
  switch (action.type) {
    case "touched": {
      return {
        ...defaultState,
        [action.iconName]: colors.white,
      };
    }
  }
}

const UseIconNavigationReducer = () => {
  const [state, dispatch] = useReducer(iconNavigationReducer, initialState);

  return [state, dispatch];
};

export default UseIconNavigationReducer;
