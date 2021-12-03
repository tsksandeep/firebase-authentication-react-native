import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home/Home";
import Otp from "./src/screens/Otp/Otp";

export type RootStackParamList = {
  // undefined is used as we are not passing parameters
  HOME: undefined;
  OTP: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="OTP" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
