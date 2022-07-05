import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          내 주변 배달료 1/N 커뮤니티 서비스,{"\n"} 지금 당장 가입하고
          시작하세요!
        </Text>

        <View>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInputId(text)}
              value={inputId}
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInputPw(text)}
              value={inputPw}
              placeholder="useless placeholder"
              secureTextEntry={true}
            />
          </SafeAreaView>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.formBtn}>
            <Text>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formBtn}>
            <Text>회원가입</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.formBtn}>
            <Text>계정 찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
  formBtn: {
    alignItems: "center",
    backgroundColor: "#3772FF",
    padding: 10,
    margin: 5,
  },
  btnContainer: {
    width: 250,
  },
});
