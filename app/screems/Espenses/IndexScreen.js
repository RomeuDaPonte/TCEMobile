import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListOfExpenses from "./ListOfExpensesScreen";
import Screen from "../../components/Screen";
import AppIconNavigator from "../../components/AppIconNavigator";
import NewExpense from "../Espenses/NewExpenseScreen";
import NewUser from "../Espenses/NewUserScreen";
import Search from "../Espenses/SearchScreen";
import Settings from "../Account/SettingsScreen";

const Stack = createStackNavigator();

const IndexScreen = ({ route }) => {
  const refContext = useRef(null);

  // const { user } = route.params;
  // console.log(user);

  return (
    <Screen>
      <NavigationContainer ref={refContext} independent={true}>
        <Stack.Navigator
          initialRouteName="ListOfExpenses"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="ListOfExpenses" component={ListOfExpenses} />
          <Stack.Screen name="NewExpense" component={NewExpense} />
          <Stack.Screen name="NewUser" component={NewUser} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
        <AppIconNavigator navigationContext={refContext} />
      </NavigationContainer>
    </Screen>
  );
};

export default IndexScreen;
