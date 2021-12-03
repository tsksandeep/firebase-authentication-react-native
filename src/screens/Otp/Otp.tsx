import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import OtpStyle from "./Otp.style";

const Otp = () => {
  return (
    <View style={OtpStyle.view}>
      <Text style={OtpStyle.enterOtp}>Enter your otp</Text>
      <OTPInputView
        style={OtpStyle.otpInputView}
        pinCount={6}
        codeInputFieldStyle={OtpStyle.codeInputField}
        codeInputHighlightStyle={OtpStyle.codeInputFieldHighLight}
        autoFocusOnLoad
      />
      <TouchableOpacity style={OtpStyle.resendOtpWrapper} onPress={() => {}}>
        <Text style={OtpStyle.resendOtp}>Resend otp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;
