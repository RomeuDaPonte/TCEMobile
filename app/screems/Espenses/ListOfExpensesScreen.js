import React from "react";
import { FlatList } from "react-native";

import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import { useListOfExpensesValue } from "../../contexts/listOfExpensesContext";
import LIstItemDateSeparator from "../../components/ListItemDateSeparator";
import ListItemDateSeparator from "../../components/ListItemDateSeparator";

const ListOfExpenses = () => {
  const { listOfExpenses } = useListOfExpensesValue();

  function findIndex(currentExpense) {
    let elementIndex;
    listOfExpenses.forEach((element, index) => {
      if (currentExpense.leadingItem.date === element.date)
        return (elementIndex = index);
    });
    return elementIndex;
  }

  function renderSeparator(currentExpense) {
    const elementIndex = findIndex(currentExpense);
    if (
      listOfExpenses[elementIndex + 1].date.slice(0, 10) ===
      listOfExpenses[elementIndex].date.slice(0, 10)
    )
      return <ListItemSeparator />;
    else
      return (
        <ListItemDateSeparator date={listOfExpenses[elementIndex + 1].date} />
      );
  }

  return (
    <>
      {listOfExpenses && (
        <>
          <ListItemDateSeparator
            date={listOfExpenses[0].date}
            otherStyles={{ paddingTop: 20 }}
          />
          <FlatList
            data={listOfExpenses}
            keyExtractor={(expense) => expense._id}
            renderItem={({ item }) => <ListItem item={item} />}
            ItemSeparatorComponent={renderSeparator}
            refreshing={true}
          />
        </>
      )}
    </>
  );
};

export default ListOfExpenses;
