import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SignUp = ({ navigation: { goBack } }) => (
  <>
    <Text>회원가입 페이지</Text>
    <TouchableOpacity onPress={() => goBack()}>
      <Text>로그인 하러가기</Text>
    </TouchableOpacity>
  </>
);

export default SignUp;
