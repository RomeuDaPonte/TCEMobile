import { useReducer } from "react";

import colors from "../LayoutHelpers/colors";

const initialState = {
  listOfExpenses: colors.light,
  newUser: colors.lightGrey,
  search: colors.lightGrey,
  newExpense: colors.lightGrey,
};

const defaultState = {
  ...initialState,
  listOfExpenses: colors.lightGrey,
};

function iconNavigationReducer(state, action) {
  switch (action.type) {
    case "touched": {
      return {
        ...defaultState,
        [action.iconName]: colors.light,
      };
    }
  }
}

const UseIconNavigationReducer = () => {
  const [state, dispatch] = useReducer(iconNavigationReducer, initialState);

  return [state, dispatch];
};

export default UseIconNavigationReducer;
