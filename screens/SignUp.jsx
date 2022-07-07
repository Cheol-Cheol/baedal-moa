import React, {useState} from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, View, SafeAreaView } from "react-native";

const SignUp = ({ navigation: { goBack } }) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  return(
  <>
    <View style={styles.container}>
      <Text style={styles.title}>아이디</Text>
        <View style={styles.id}>
          <TextInput
            style={styles.inputView}
            placeholder=" 5~20자/소문자,숫자,(_),(-)만 사용 가능
            "
            placeholderTextColor="#d3d3d3"
            value={userId}
            onChangeText={setUserId}
          />
          <TouchableOpacity
            style={styles.idBtn}
            // onPress
          >
          <Text style={styles.idText}>중복확인</Text>
          </TouchableOpacity>
        </View>

      <Text style={styles.title}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="실명을 입력하세요"
          placeholderTextColor="#d3d3d3"
          value={username}
          onChangeText={setUsername}
        />

      <Text style={styles.title}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="8~16자 영문 대 소문자, 숫자를 사용하세요.
          "
          placeholderTextColor="#d3d3d3"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

      <Text style={styles.title}>비밀번호 확인</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 확인"
          placeholderTextColor="#d3d3d3"
          secureTextEntry={true}
          value={repassword}
          onChangeText={setRepassword}
        />

      <Text style={styles.title}>휴대폰 번호</Text>
      {/* 휴대폰 인증 방법 알아보기 .. */}
        <TextInput
          style={styles.input}
          placeholder="'-'구분없이 입력"
          placeholderTextColor="#d3d3d3"
          value={phoneNum}
          onChangeText={setPhoneNum}
        />

      <TouchableOpacity 
      style={styles.btn}
      onPress={() => goBack()}>
        <Text style={styles.textBtn}>배달모아 시작하기</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => goBack()}>
        {/* signUp({ userId, username, password, repassword }) */}
        <Text style={styles.text}>로그인 하러가기</Text>
      </TouchableOpacity>
    </View>

  </>
  )};

export default SignUp;

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 30,
  },
  title:{
    fontSize: 17,
    marginBottom: 5
  },
  id: {
    flexDirection: "row",
    display: "flex"
  },
  inputView: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 25,
    flexGrow: 3,
    flexBasis: 0,
  },
  input:{
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 25,
  },
  idBtn: {
    flexGrow: 1,
    flexBasis: 0,
    marginLeft: 5,
    width: 80,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3772FF",
    alignItems: "center",
    justifyContent: "center",

  },
  idText: {
    alignItems:"center",
    textAlign:"center",
    color: "#3772FF",
  },
  btn:{
    height: 55,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#3772FF",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn:{
    fontSize: 18,
    fontWeight: "600",
    color: "white"
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    textDecorationLine: "underline"
  }
});