import React, { useState } from "react";
<<<<<<< Updated upstream
<<<<<<< HEAD
import { NavigationContainer, Text } from "@react-navigation/native";
import Login from "./components/Login";
=======
import { NavigationContainer } from "@react-navigation/native";
>>>>>>> Stashed changes
import Stack from "./navigation/Stack";

export default function App() {
  return (
    <>
<<<<<<< Updated upstream
      <Login />
      <Text>민혜</Text>
=======
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

export default function App() {
  return (
    <>
>>>>>>> 359bac7f4a3e2d97ad53bfb82a6a76f832695636
=======
      {/* <Login /> */}
>>>>>>> Stashed changes
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </>
  );
}
