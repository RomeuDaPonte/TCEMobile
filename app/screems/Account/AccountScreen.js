import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem";
import colors from "../../LayoutHelpers/colors";
import Icon from "../../components/icon";
import ListItemSeparator from "../../components/ListItemSeparator";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.constainer}>
        <ListItem
          title="Romeu da Pone"
          subTitle="romeudaponte@gmail.com"
          image={require("../../assets/Rom.jpg")}
        />
      </View>
      <View style={styles.constainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
