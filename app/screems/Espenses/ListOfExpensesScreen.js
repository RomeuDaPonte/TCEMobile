import React from "react";
import { FlatList } from "react-native";

import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import { useListOfExpensesValue } from "../../contexts/listOfExpensesContext";
import ListItemDateSeparator from "../../components/ListItemDateSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

const ListOfExpenses = () => {
  const { listOfExpenses } = useListOfExpensesValue();

  function renderSeparator(currentExpense) {
    for (let i = 0; i <= listOfExpenses.length; i++) {
      if (listOfExpenses[i]._id === currentExpense.leadingItem._id) {
        if (listOfExpenses[i + 1].date) {
          if (listOfExpenses[i + 1].date.slice(0, 10) === listOfExpenses[i].date.slice(0, 10))
            return <ListItemSeparator />
          else return <ListItemDateSeparator date={listOfExpenses[i + 1].date} />
        }
      }
    }
    return <ListItemSeparator />
  }

  return (
    <>
      {listOfExpenses && (
        <>
          {listOfExpenses.length > 1 && (
            <ListItemDateSeparator
              date={listOfExpenses[0].date}
              otherStyles={{ paddingTop: 20 }}
            />
          )}
          <FlatList
            data={listOfExpenses}
            keyExtractor={(expense) => expense._id}
            renderItem={({ item }) => <ListItem item={item} renderRightActions={() => <ListItemDeleteAction onPress={() => console.log("deleted")} />} />}
            ItemSeparatorComponent={renderSeparator}
          />
        </>
      )}
    </>
  );
};

export default ListOfExpenses;
