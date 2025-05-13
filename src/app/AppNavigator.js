import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// import SignInScreen1 from "../pages/auth/signInScreen";
// import SignUpScreen from "../pages/auth/signUpScreen";
// import UserFormScreen from "../pages/songGeneration/form";
// import SongScreen from "../pages/songs/songScreen";
import SignInScreen from "../pages/newUI/SignInScreen";
import SignUpScreen from "../pages/newUI/SingUpScreen";

import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="SignIn" component={SignInScreen1} /> */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* <Stack.Screen name="UserForm" component={UserFormScreen} />
        <Stack.Screen name="Song" component={SongScreen} /> */}
        <Stack.Screen name="SignInScreen" component={SignInScreen} />

        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
