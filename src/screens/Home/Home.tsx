import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../../App";
import HomeStyle from "./Home.style";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "HOME">;
};

const Home = ({ navigation }: Props) => {
  return (
    <View style={HomeStyle.view}>
      <Text style={HomeStyle.title}>Welcome to Thagaval</Text>
      <TouchableOpacity onPress={() => navigation.navigate("OTP")}>
        <View style={HomeStyle.getStartedWrapper}>
          <Text style={HomeStyle.getStarted}>Get started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
