import { useReducer } from "react";

import colors from "../LayoutHelpers/colors";

const initialState = {
  ListOfExpenses: colors.primary,
  RewUser: colors.black,
  Settings: colors.black,
  Search: colors.black,
  NewExpense: colors.black,
};

const defaultState = {
  ...initialState,
  ListOfExpenses: colors.black,
};

function iconNavigationReducer(state, action) {
  switch (action.type) {
    case "touched": {
      return {
        ...defaultState,
        [action.iconName]: colors.primary,
      };
    }
  }
}

const UseIconNavigationReducer = () => {
  const [state, dispatch] = useReducer(iconNavigationReducer, initialState);

  return [state, dispatch];
};

export default UseIconNavigationReducer;
