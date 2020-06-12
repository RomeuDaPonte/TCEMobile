import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./app/screems/Account/LoginScreen";
import WelcomeScreen from "./app/screems/WelcomeScren";
import IndexScreen from "./app/screems/Espenses/IndexScreen";
import RegisterScreen from "./app/screems/Account/RegisterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Index" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
