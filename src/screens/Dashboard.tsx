import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { css } from "@emotion/native";
import { View, Text } from "react-native";

import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import GradientText from "../components/GradientText/GradientText";

const Dashboard = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={DashboardStyle.container}>
      <Logo />
      <GradientText style={DashboardStyle.header}>
        Let's Start
      </GradientText>
      <Text>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Text>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
        }
      >
        Logout
      </Button>
    </View>
  );
};

const DashboardStyle = {
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
};

export default Dashboard;
