// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login";
import Stack from "./navigation/Stack";
// tabBarStyle: { display: 'none' }
export default function App() {
  return (
    <>
      <Login />
      {/* <NavigationContainer>
        <Stack />
      </NavigationContainer> */}
    </>
  );
}
