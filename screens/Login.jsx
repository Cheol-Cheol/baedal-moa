import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Login = ({ navigation: { navigate } }) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputErr, setInputErr] = useState({
    idErr: "",
    pwErr: "",
  });
  const [modalVisible, setModalVisible] = useState(false);

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
              onChangeText={(text) => {
                const errMsg = { ...inputErr };
                errMsg.idErr = "";
                setInputErr(errMsg);
                setInputId(text);
              }}
              value={inputId}
              placeholder="아이디를 입력하시오."
              placeholderTextColor="black"
            />
            <Text style={styles.inputError}>{inputErr.idErr}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                const errMsg = { ...inputErr };
                errMsg.pwErr = "";
                setInputErr(errMsg);
                setInputPw(text);
              }}
              value={inputPw}
              secureTextEntry={true}
              placeholder="비밀번호를 입력하시오."
              placeholderTextColor="black"
            />
            <Text style={styles.inputError}>{inputErr.pwErr}</Text>
          </SafeAreaView>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.formBtn}
            onPress={() => {
              if (inputId.trim() === "") {
                const errMsg = { ...inputErr };
                errMsg.idErr = "아이디를 입력해주세요.";
                setInputErr(errMsg);
              } else if (inputPw.trim() === "") {
                const errMsg = { ...inputErr };
                errMsg.pwErr = "비밀번호를 입력해주세요.";
                setInputErr(errMsg);
              } else {
                // 서버 통신 요청 부분
                const isLogin = false;

                if (isLogin) navigate("Tabs", { screen: "홈" });
                else setModalVisible(true);
              }
            }}
          >
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              일치하지 않습니다.{"\n"}다시 한번 확인하시고 입력하시기 바랍니다.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                setInputId("");
                setInputPw("");
              }}
            >
              <Text style={styles.textStyle}>확인</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    marginBottom: 25,
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
  inputError: {
    color: "red",
    marginLeft: 20,
    fontWeight: "600",
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
  // modal style
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 150,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
