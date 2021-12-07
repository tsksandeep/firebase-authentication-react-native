import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Otp from "./src/screens/Otp";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

import { theme } from "./src/core/theme";
import { UserExistsError, UserNotExistsError } from "./src/firebase/db";

declare global {
  type RootStackParamList = {
    // undefined is used as we are not passing parameters
    Home: undefined;
    Otp: {
      page: string;
      verificationId: string;
      name?: string;
      phoneNumber?: string;
    };
    Login: {
      error?: UserNotExistsError;
    };
    Register: {
      error?: UserExistsError;
    };
  };
}

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
