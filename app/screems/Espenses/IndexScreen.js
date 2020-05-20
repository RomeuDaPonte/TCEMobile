import React, { useState } from "react";

import ListOfExpenses from "./ListOfExpensesScreen";
import Screen from "../../components/Screen";
import IconNavigation from "./IconNavigation";
import NewExpense from "./NewExpenseScreen";
import Search from "./SearchScreen";
import NewUser from "./NewUserScreen";

const IndexScreen = ({ route }) => {
  const { user } = route.params;
  console.log(user);

  const [state, setState] = useState("listOfExpenses");

  function handleIconTaped(iconName = "listOfExpenses") {
    setState(iconName);
  }

  return (
    <Screen>
      {state === "listOfExpenses" && <ListOfExpenses />}
      {state === "newUser" && <NewUser />}
      {state === "search" && <Search />}
      {state === "newExpense" && <NewExpense />}
      <IconNavigation handleIconTaped={handleIconTaped} />
    </Screen>
  );
};

export default IndexScreen;
