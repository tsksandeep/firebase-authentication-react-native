import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { css } from "@emotion/native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import Logo from "../components/Logo/Logo";
import GradientText from "../components/GradientText/GradientText";
import { FirebaseAuth } from "../firebase/config";
import AuthComponent from "../components/Auth/Auth";

const Home = () => {
  let [fontsLoaded] = useFonts({
    Pacifico: require("../assets/fonts/Pacifico.ttf"),
  });
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  if (!fontsLoaded) {
    return (
      <View style={DashboardStyle.container}>
        <Text>Loading</Text>
      </View>
    );
  }
  if (!FirebaseAuth.currentUser) {
    return <AuthComponent />;
  }

  return (
    <View style={DashboardStyle.container}>
      <Logo />
      <GradientText style={DashboardStyle.header}>Let's Start</GradientText>
      <Text>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Text>
    </View>
  );
};

const DashboardStyle = {
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
};

export default Home;
