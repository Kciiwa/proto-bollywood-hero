// // AppNavigator.js
// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import SignInScreen from "./signInScreen"; // Импортируем ваш компонент
// import SignUpScreen from "./signUpScreen"; // Импортируем экран регистрации, который вам нужно создать
// import UserFormScreen from "./form";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignIn">
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen
//           name="UserForm"
//           component={UserFormScreen}
//           options={{ title: "Создай свою песню" }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen from "./signInScreen";
import SignUpScreen from "./signUpScreen";
import UserFormScreen from "./form";
import SongScreen from "./songScreen";

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
          name="Song" // 👈 Имя должно совпадать с navigation.navigate("Song", ...)
          component={SongScreen}
          options={{ title: "Ваша песня" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
