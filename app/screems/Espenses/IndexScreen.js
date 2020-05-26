import React, { useState } from "react";

import ListOfExpenses from "./ListOfExpensesScreen";
import Screen from "../../components/Screen";
import IconNavigation from "./IconNavigation";
import NewExpense from "./NewExpenseScreen";
import Search from "./SearchScreen";
import NewUser from "./NewUserScreen";
import UseIconNavigationReducer from "../../reducers/useIconNavigationReducer";

const IndexScreen = ({ route }) => {
  const [isHighlighted, dispatch] = UseIconNavigationReducer();
  const [state, setState] = useState("listOfExpenses");
  //const { user } = route.params;
  //console.log(user);

  function handleIconNavigation(iconName = "listOfExpenses") {
    dispatch({ type: "touched", iconName: iconName });
    setState(iconName);
  }

  return (
    <Screen>
      {state === "listOfExpenses" && <ListOfExpenses />}
      {state === "newUser" && <NewUser />}
      {state === "search" && <Search />}
      {state === "newExpense" && (
        <NewExpense handleIconNavigation={handleIconNavigation} />
      )}
      <IconNavigation
        handleIconNavigation={handleIconNavigation}
        isHighlighted={isHighlighted}
      />
    </Screen>
  );
};

export default IndexScreen;
