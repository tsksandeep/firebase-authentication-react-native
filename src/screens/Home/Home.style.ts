import { css } from "@emotion/native";

const HomeStyle = {
  view: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0984e3;
  `,
  title: css`
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin-bottom: 10px;
  `,
  getStartedWrapper: css`
    margin-top: 10px;
    border-radius: 10px;
    overflow: hidden;
  `,
  getStarted: css`
    font-size: 20px;
    font-weight: 600;
    color: #0984e3;
    background: white;
    padding: 10px 20px;
    text-transform: uppercase;
  `,
};

export default HomeStyle;
