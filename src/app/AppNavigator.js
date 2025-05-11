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
//       <Stack.Navigator
//         initialRouteName="Main"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="SignIn" component={SignInScreen1} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="UserForm" component={UserFormScreen} />
//         <Stack.Screen name="Song" component={SongScreen} />
//         <Stack.Screen name="SignInScreen" component={SignInScreen} />

//         {/* Убираем хедер для Main */}
//         <Stack.Screen name="Main" component={DrawerNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase"; // путь поправь при необходимости

import SignInScreen1 from "../pages/auth/signInScreen";
// import SignUpScreen1 from "../pages/auth/signUpScreen";
import UserFormScreen from "../pages/songGeneration/form";
import SongScreen from "../pages/songs/songScreen";
import SignInScreen from "../pages/newUI/SignInScreen";
import LoadingScreen from "../pages/newUI/loadingScreen/LoadingScreen";
import DrawerNavigator from "./DrawerNavigator";
import SignUpScreen from "../pages/newUI/SingUpScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [user, setUser] = useState(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  if (!isAuthChecked) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Пользователь залогинен – показываем Drawer
          <>
            <Stack.Screen name="Main" component={DrawerNavigator} />
            <Stack.Screen name="UserForm" component={UserFormScreen} />
            <Stack.Screen name="Song" component={SongScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          </>
        ) : (
          // Пользователь не залогинен – показываем авторизацию
          <>
            <Stack.Screen name="SignIn" component={SignInScreen1} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
