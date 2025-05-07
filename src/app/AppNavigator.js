// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// import SignInScreen1 from "../pages/auth/signInScreen";
// import SignUpScreen from "../pages/auth/signUpScreen";
// import UserFormScreen from "../pages/songGeneration/form";
// import SongScreen from "../pages/songs/songScreen";
// import ContactScreen from "../pages/newUI/ContactScreen";
// import CreateSongScreen from "../pages/newUI/CreateSongScreen";
// import HomeScreen from "../pages/newUI/HomeScreen";
// import LibraryScreen from "../pages/newUI/LibraryScreen";
// import SignInScreen from "../pages/newUI/SignInScreen";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignInScreen">
//         <Stack.Screen name="SignIn" component={SignInScreen1} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen
//           name="UserForm"
//           component={UserFormScreen}
//           options={{ title: "Создай свою песню" }}
//         />
//         <Stack.Screen
//           name="Song"
//           component={SongScreen}
//           options={{ title: "Ваша песня" }}
//         />

//         {/* дальше скрытые новые экраны */}

//         <Stack.Screen
//           name="ContactScreen"
//           component={ContactScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="CreateSongScreen"
//           component={CreateSongScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="LibraryScreen"
//           component={LibraryScreen}
//           options={{ headerShown: false }}
//         />

//         <Stack.Screen
//           name="SignInScreen"
//           component={SignInScreen}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// import SignInScreen1 from "../pages/auth/signInScreen";
// import SignUpScreen from "../pages/auth/signUpScreen";
// import UserFormScreen from "../pages/songGeneration/form";
// import SongScreen from "../pages/songs/songScreen";
// import SignInScreen from "../pages/newUI/SignInScreen";

// import DrawerNavigator from "./DrawerNavigator";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen name="SignIn" component={SignInScreen1} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="UserForm" component={UserFormScreen} />
//         <Stack.Screen name="Song" component={SongScreen} />
//         <Stack.Screen name="SignInScreen" component={SignInScreen} />
//         <Stack.Screen
//           name="Main"
//           component={DrawerNavigator}
//           options={{ headerShown: true }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// import SignInScreen1 from "../pages/auth/signInScreen";
// import SignUpScreen from "../pages/auth/signUpScreen";
// import UserFormScreen from "../pages/songGeneration/form";
// import SongScreen from "../pages/songs/songScreen";
// import SignInScreen from "../pages/newUI/SignInScreen";

// import DrawerNavigator from "./DrawerNavigator";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen name="SignIn" component={SignInScreen1} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="UserForm" component={UserFormScreen} />
//         <Stack.Screen name="Song" component={SongScreen} />
//         <Stack.Screen name="SignInScreen" component={SignInScreen} />
//         <Stack.Screen
//           name="Main"
//           component={DrawerNavigator}
//           options={({ navigation }) => ({
//             headerShown: true,
//             headerStyle: { backgroundColor: "#fff" },
//             headerTintColor: "#000",
//             headerRight: () => (
//               <TouchableOpacity
//                 onPress={() => navigation.navigate("SignInScreen")}
//               >
//                 <Ionicons
//                   name="person-outline"
//                   size={30}
//                   color="black"
//                   style={{ marginRight: 15 }}
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// import SignInScreen1 from "../pages/auth/signInScreen";
// import SignUpScreen from "../pages/auth/signUpScreen";
// import UserFormScreen from "../pages/songGeneration/form";
// import SongScreen from "../pages/songs/songScreen";
// import SignInScreen from "../pages/newUI/SignInScreen";

// import DrawerNavigator from "./DrawerNavigator";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen name="SignIn" component={SignInScreen1} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="UserForm" component={UserFormScreen} />
//         <Stack.Screen name="Song" component={SongScreen} />
//         <Stack.Screen name="SignInScreen" component={SignInScreen} />

//         {/* Убираем хедер из стека для Main и используем хедер из DrawerNavigator */}
//         <Stack.Screen name="Main" component={DrawerNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignInScreen1 from "../pages/auth/signInScreen";
import SignUpScreen from "../pages/auth/signUpScreen";
import UserFormScreen from "../pages/songGeneration/form";
import SongScreen from "../pages/songs/songScreen";
import SignInScreen from "../pages/newUI/SignInScreen";

import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen1} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="UserForm" component={UserFormScreen} />
        <Stack.Screen name="Song" component={SongScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />

        {/* Убираем хедер для Main */}
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
