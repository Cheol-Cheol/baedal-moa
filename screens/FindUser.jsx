import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SignUp = ({ navigation: { goBack } }) => (
  <TouchableOpacity onPress={() => goBack()}>
    <Text>FindUser Screen</Text>
  </TouchableOpacity>
);

export default SignUp;
