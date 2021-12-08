import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Otp from "./src/screens/Otp";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Request from "./src/screens/Request";

import { theme } from "./src/core/theme";

declare global {
  type RootStackParamList = {
    // undefined is used as we are not passing parameters
    Home: {
      // message should be always in the format
      // <Random message number>: <Your message>
      // Random message number is used to render the state properly
      message?: string;
    };
    Otp: {
      page: string;
      verificationId: string;
      name?: string;
      phoneNumber?: string;
    };
    Login: {
      error?: Error;
    };
    Register: {
      error?: Error;
    };
    Request: undefined;
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
          <Stack.Screen name="Request" component={Request} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
