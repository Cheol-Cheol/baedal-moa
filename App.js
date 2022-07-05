// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer, Text } from "@react-navigation/native";
import Login from "./components/Login";
import Stack from "./navigation/Stack";
// tabBarStyle: { display: 'none' }
export default function App() {
  return (
    <>
      <Login />
      <Text>민혜</Text>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  );
}
