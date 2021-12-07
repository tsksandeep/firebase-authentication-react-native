import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { css } from "@emotion/native";
import {
  PhoneAuthProvider,
  signInWithCredential,
  UserCredential,
} from "firebase/auth";

import Logo from "../components/Logo/Logo";
import BackButton from "../components/BackButton/BackButton";
import GradientText from "../components/GradientText/GradientText";
import { FirebaseAuth } from "../firebase/config";
import {
  readUserData,
  UserExistsError,
  UserNotExistsError,
  writeUserData,
} from "../firebase/db";

const Otp = (props: any) => {
  const page = props.route.params.page;
  const verificationId = props.route.params.verificationId;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const registerCb = async (userCredential: UserCredential) => {
    const userData = {
      userId: userCredential.user.uid,
      name: props.route.params.name,
      phoneNumber: props.route.params.phoneNumber,
    };

    if (userData.name === "" || userData.phoneNumber === "") {
      return;
    }

    const resp = await writeUserData(userData);
    if (resp instanceof UserExistsError) {
      navigation.navigate("Login", {
        error: resp,
      });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  const loginCb = async (userCredential: UserCredential) => {
    const resp = await readUserData(userCredential.user.uid);
    if (resp instanceof UserNotExistsError) {
      navigation.navigate("Register", {
        error: resp,
      });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  const onCodeFilled = async (code: string) => {
    try {
      const userCredential = await signInWithCredential(
        FirebaseAuth,
        PhoneAuthProvider.credential(verificationId, code)
      );
      if (page === "register") registerCb(userCredential);
      if (page === "login") loginCb(userCredential);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={OtpStyleComponent.container}>
      <BackButton />
      <Logo />
      <GradientText style={OtpStyleComponent.header}>
        Enter your OTP
      </GradientText>
      <OTPInputView
        style={OtpStyleComponent.otpInputView}
        pinCount={6}
        codeInputFieldStyle={OtpStyleComponent.codeInputField}
        codeInputHighlightStyle={OtpStyleComponent.codeInputFieldHighLight}
        autoFocusOnLoad
        onCodeFilled={onCodeFilled}
      />
      <TouchableOpacity
        style={OtpStyleComponent.resendOtpWrapper}
        onPress={() => {}}
      >
        <Text style={OtpStyleComponent.resendOtp}>Resend otp</Text>
      </TouchableOpacity>
    </View>
  );
};

const OtpStyleComponent = {
  container: css`
    height: 100%;
    display: flex;
    align-items: center;
    background: white;
    padding: 150px 30px 0 30px;
  `,
  header: css`
    width: 100%;
    text-align: center;
    font-family: "Pacifico";
    font-size: 40px;
    margin-bottom: 20px;
    padding: 0 10px;
  `,
  otpInputView: css`
    width: 100%;
    height: 100px;
    padding: 10px 20px;
  `,
  resendOtpWrapper: css`
    border-bottom-color: white;
    border-bottom-width: 1px;
  `,
  resendOtp: css`
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 20px;
    color: white;
    padding-bottom: 3px;
  `,
  codeInputField: css`
    width: 40px;
    height: 45px;
    color: #c422ff;
    font-size: 24px;
    font-weight: 500;
    background: #fff;
    border: 2px solid #1d7eff;
    border-radius: 6px;
  `,
  codeInputFieldHighLight: css`
    border: 2px solid #c422ff;
  `,
};

export default Otp;
