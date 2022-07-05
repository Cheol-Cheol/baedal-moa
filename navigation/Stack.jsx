import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/SingUp";
import FindUser from "../screens/FindUser";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen name="SignUp" component={SignUp} />
    <NativeStack.Screen name="FindUser" component={FindUser} />
  </NativeStack.Navigator>
);

export default Stack;
