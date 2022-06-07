import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
// import { Login, Signup, Signupp } from "./src/routes/Login&Signup/AuthScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/navigation/PrivateScreen";


const AuthStack = createStackNavigator()

export const App = () => {

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}