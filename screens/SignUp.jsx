import React, {useState} from "react";
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";

const SignUp = ({ navigation: { goBack } }) => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  return(
  <>
    <View style={styles.container}>
      <Text style={styles.title}>아이디</Text>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={userId}
        onChangeText={setUserId}
      />
       <Text style={styles.title}>이름</Text>
      <TextInput
        style={styles.input}
        placeholder="이름"
        value={username}
        onChangeText={setUsername}
      />
       <Text style={styles.title}>비밀번호</Text>
      <TextInput
        style={styles.input}
        placeholder="8~12자리"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
       <Text style={styles.title}>비밀번호 확인</Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        secureTextEntry={true}
        value={repassword}
        onChangeText={setRepassword}
      />
      <TouchableOpacity 
      style={styles.btn}
      onPress={() => goBack()}>
        <Text style={styles.textBtn}>배달모아 시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      
      onPress={() => goBack()}>
        {/* signUp({ userId, username, password, repassword }) */}
        <Text>로그인 하러가기</Text>
      </TouchableOpacity>
    </View>
  </>
  )};

export default SignUp;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  title:{
    margin: 10,
    fontSize: 18,
    color: "#333"
  },
  input:{
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    height: 40,
    width: 350,
    marginBottom: 20,
  },
  btn:{
    height: 60,
    width: 240,
    margin: 20,
    borderRadius: 15,
    backgroundColor: "#3772FF",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn:{
    fontSize: 18,
    fontWeight: "600",
    color: "white"
    
  }
});