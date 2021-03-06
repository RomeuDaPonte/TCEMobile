import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListOfExpenses from "./ListOfExpensesScreen";
import Screen from "../../components/Screen";
import NewExpense from "../Espenses/NewExpenseScreen";
import NewUser from "../Espenses/NewUserScreen";
import Search from "../Espenses/SearchScreen";
import Settings from "../Account/SettingsScreen";
import colors from "../../LayoutHelpers/colors";
import useToggleKeyboard from "../../customHooks/useToggleKeyboard";
import Header from "./Header";
import { ListOfExpensesProvider } from "../../contexts/listOfExpensesContext";

const Tab = createBottomTabNavigator();

const IndexScreen = ({ route }) => {
  const { showKeyboard } = useToggleKeyboard();

  return (
    <ListOfExpensesProvider>
      <Header />
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "view-list";

              if (route.name === "LisOfExpenses") iconName = "view-list";
              else if (route.name === "NewUser") iconName = "account-plus";
              else if (route.name === "Settings") iconName = "settings";
              else if (route.name === "Search") iconName = "table-search";
              else if (route.name === "NewExpense") iconName = "plus";

              return (
                <MaterialCommunityIcons
                  style={styles.icon}
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: "gray",
            style: [styles.nav, showKeyboard],
          }}
        >
          <Tab.Screen
            name="ListOfExpenses"
            component={ListOfExpenses}
            options={{
              tabBarLabel: "",
            }}
          />
          <Tab.Screen
            name="NewUser"
            component={NewUser}
            options={{
              tabBarLabel: "",
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: "",
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: "",
            }}
          />
          <Tab.Screen
            name="NewExpense"
            component={NewExpense}
            options={{
              tabBarLabel: "",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ListOfExpensesProvider>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 15,
  },
  nav: {
    backgroundColor: colors.light,
  },
});

export default IndexScreen;
