import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Login = ({ navigation: { navigate } }) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>배달모아</Text>
        <Text style={styles.headerContent}>
          내 주변 배달료 1/N 커뮤니티 서비스,{"\n"} 지금 당장 가입하고
          시작하세요!
        </Text>

        <View>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInputId(text)}
              value={inputId}
              placeholder="아이디를 입력하시오."
              placeholderTextColor="black"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInputPw(text)}
              value={inputPw}
              secureTextEntry={true}
              placeholder="비밀번호를 입력하시오."
              placeholderTextColor="black"
            />
          </SafeAreaView>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.formBtn}>
            <Text style={styles.formBtnTitle}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.formBtn}
            onPress={() => navigate("회원가입")}
          >
            <Text style={styles.formBtnTitle}>회원가입</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.formBtn}
            onPress={() => navigate("계정 찾기")}
          >
            <Text style={styles.formBtnTitle}>계정 찾기</Text>
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
  headerTitle: {
    margin: 10,
    color: "#3772FF",
    fontSize: SCREEN_WIDTH / 5.5,
    fontWeight: "bold",
  },
  headerContent: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    margin: 7,
    padding: 10,
    width: SCREEN_WIDTH / 1.35,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 18,
  },
  btnContainer: {
    width: SCREEN_WIDTH / 1.3,
  },
  formBtn: {
    margin: 8,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#3772FF",
  },
  formBtnTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
