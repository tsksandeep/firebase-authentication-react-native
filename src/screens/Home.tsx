import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { css } from "@emotion/native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import Logo from "../components/Logo/Logo";
import GradientText from "../components/GradientText/GradientText";
import { FirebaseAuth } from "../firebase/config";
import AuthComponent from "../components/Auth/Auth";
import { readUserData, UserData, UserNotExistsError } from "../firebase/db";
import Button from "../components/Button/Button";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  let [fontsLoaded] = useFonts({
    Pacifico: require("../assets/fonts/Pacifico.ttf"),
  });
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserData>({
    name: "",
    phoneNumber: "",
    userId: "",
  });

  useEffect(() => {
    FirebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const resp = await readUserData(user.uid);
        if (resp instanceof UserNotExistsError) setLoading(false);
        setLoading(false);
        setUser(resp);
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading || !fontsLoaded) {
    return (
      <View style={DashboardStyle.container}>
        <Logo />
      </View>
    );
  }

  return (
    <>
      {!user.userId ? (
        <AuthComponent />
      ) : (
        <View style={DashboardStyle.container}>
          <Logo />
          <GradientText style={DashboardStyle.header}>
            Hello {user.name}
          </GradientText>
          <Text>
            Your amazing app starts here. Open you favorite code editor and
            start editing this project.
          </Text>
          <Button
            mode="outlined"
            onPress={async () => {
              await FirebaseAuth.signOut();
              setUser({
                name: "",
                phoneNumber: "",
                userId: "",
              });
            }}
          >
            Logout
          </Button>
        </View>
      )}
    </>
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
