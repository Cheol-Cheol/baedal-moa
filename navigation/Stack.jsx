import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/SignUp";
import FindUser from "../screens/FindUser";
import Login from "../screens/Login";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerBackTitleVisible: false }}
  >
    <NativeStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen name="회원가입" component={SignUp} />
    <NativeStack.Screen name="계정 찾기" component={FindUser} />
  </NativeStack.Navigator>
);

export default Stack;
