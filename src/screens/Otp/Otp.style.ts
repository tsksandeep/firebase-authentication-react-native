import { css } from "@emotion/native";

const OtpStyle = {
  view: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #0984e3;
  `,
  otpInputView: css`
    width: 100%;
    height: 100px;
    padding: 10px 20px;
  `,
  enterOtp: css`
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 60px;
    color: white;
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
    color: #000;
    font-size: 24px;
    font-weight: 500;
    background: #fff;
    border: none;
    border-radius: 6px;
    // shadow-color: rgb(218, 218, 218);
    // shadow-offset: 4px 8px;
    // shadow-opacity: 0.5;
    // shadow-radius: 10px;
  `,
  codeInputFieldHighLight: css`
    border-bottom-color: #03dac6;
  `,
};

export default OtpStyle;
