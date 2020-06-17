import React from "react";
import { FlatList } from "react-native";

import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";
import { useListOfExpensesValue } from "../../contexts/listOfExpensesContext";

const ListOfExpenses = () => {
  const { listOfExpenses } = useListOfExpensesValue();

  return (
    <>
      {listOfExpenses && (
        <FlatList
          data={listOfExpenses}
          keyExtractor={(expense) => expense._id}
          renderItem={({ item }) => <ListItem item={item} />}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          refreshing={true}
        />
      )}
    </>
  );
};

export default ListOfExpenses;
