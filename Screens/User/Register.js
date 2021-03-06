import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Radio, Group } from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EasyButton from "../../Shared/StyledComponents/EasyButton";

import axios from "axios";
import baseURL from "../../assets/common/baseUrl";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false)

  const register = () => {
    if (email === "" || name === "" || phone === "" || password === "") {
      setError("Please fill in the form correctly,all fields are required");
    }

    let user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      isAdmin: false,
    };
    axios
      .post(`${baseURL}users/register`, user)
      .then((res) => {
        if (res.status == 200) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Registration Succeeded",
            text2: "Please Login into your account",
          });
          setTimeout(() => {
            props.navigation.navigate("Login");
          }, 500);
        }
      })
      .catch((error) => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Something went wrong",
          text2: "Please try again",
          visibilityTime: 3000,
          autoHide: true,
        });
      });
  };

  // const emailValidator = () => {
  //   if (state.email == "") {
  //     setState({...state, emailError: "Email Field canot be empty" });
  //   } else {
  //     setState({...state, emailError: "" });
  //   }
  // };
  const onChangeCB = (e) => {
    if (!e.target.checked) {
      setUser({ ...user, [e.target.name]: false });
    } else if (e.target.checked) {
      setUser({ ...user, [e.target.name]: true });
    }
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Register"}>
        <Input
          placeholder={"Enter your Email"}
          name={"email"}
          id={"email"}
          onChangeText={(text) => setEmail(text.toLowerCase().trim())}
        />
        <Input
          placeholder={"Enter Your Name"}
          name={"name"}
          id={"name"}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder={"Enter Phone Number"}
          name={"phone"}
          id={"phone"}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Enter Password"}
          name={"password"}
          id={"password"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
        </View>
        {/* <View>
          <Radio.Group
           name="isAdmin"
           id = "isAdmin"
           accessibilityLabel="favorite number" 
           value={isAdmin} 
           onChange={setIsAdmin(true)}
           >
             <Radio value={isAdmin} my={1}>
              User
             </Radio>
             <Radio value={!isAdmin} my={1}>
              Seller
             </Radio>
            
          </Radio.Group>
        </View> */}
        <View>
          <EasyButton large primary onPress={() => register()}>
            <Text style={styles.buttonTextStyle}>Register</Text>
          </EasyButton>
        </View>
        <View>
          <EasyButton
            large
            secondary
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextStyle}>Back to Login</Text>
          </EasyButton>
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    margin: 10,
    alignItems: "center",
  },
  buttonTextStyle: {
    color: "white",
    fontFamily: "nunito_semi_bold",
    fontSize: 20,
  }
});

export default Register;
