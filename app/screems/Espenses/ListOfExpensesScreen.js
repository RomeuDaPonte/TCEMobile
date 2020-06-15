import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { UseListOfExpenses } from "../../customHooks/useListOfExpenses";
import ListItem from "../../components/ListItem";
import ListItemSeparator from "../../components/ListItemSeparator";

const ListOfExpenses = () => {
  const { listOfExpenses } = UseListOfExpenses();

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
