import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen1 from "../pages/auth/signInScreen";
import SignUpScreen from "../pages/auth/signUpScreen";
import UserFormScreen from "../pages/songGeneration/form";
import SongScreen from "../pages/songs/songScreen";
import ContactScreen from "../pages/newUI/ContactScreen";
import CreateSongScreen from "../pages/newUI/CreateSongScreen";
import HomeScreen from "../pages/newUI/HomeScreen";
import LibraryScreen from "../pages/newUI/LibraryScreen";
import SignInScreen from "../pages/newUI/SignInScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactScreen">
        <Stack.Screen name="SignIn" component={SignInScreen1} />
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

        {/* дальше скрытые новые экраны */}

        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CreateSongScreen"
          component={CreateSongScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LibraryScreen"
          component={LibraryScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
