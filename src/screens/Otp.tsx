import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { css } from "@emotion/native";

import Logo from "../components/Logo/Logo";
import BackButton from "../components/BackButton/BackButton";
import GradientText from "../components/GradientText/GradientText";

const Otp = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
        onCodeFilled={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          });
        }}
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
    justify-content: center;
    background: white;
    padding: 0 30px;
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
