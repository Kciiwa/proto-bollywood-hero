import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen from "../pages/auth/signInScreen";
import SignUpScreen from "../pages/auth/signUpScreen";
import UserFormScreen from "../pages/songGeneration/form";
import SongScreen from "../pages/songs/songScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="UserForm"
          component={UserFormScreen}
          options={{ title: "Создай свою песню" }}
        />
        <Stack.Screen
          name="Song"
          component={SongScreen}
          options={{ title: "Ваша песня" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
