import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Login from "./components/Login";
// import Stack from "./navigation/Stack";
{
  /* <NavigationContainer>
        <Stack />
      </NavigationContainer> */
}
export default function App() {
  return (
    <>
      <StatusBar />
      <Login />
    </>
  );
}
