import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { css } from "@emotion/native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import GradientText from "../components/GradientText/GradientText";

const Home = () => {
  let [fontsLoaded] = useFonts({
    Pacifico: require("../assets/fonts/Pacifico.ttf"),
  });
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  if (!fontsLoaded) {
    return (
      <View style={HomeStyle.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={HomeStyle.container}>
      <Logo />
      <GradientText style={HomeStyle.header}>Thagaval</GradientText>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
        Sign Up
      </Button>
    </View>
  );
};

const HomeStyle = {
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

export default Home;
