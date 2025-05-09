// // navigation/DrawerNavigator.js
// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Ionicons } from "@expo/vector-icons";

// import HomeScreen from "../pages/newUI/HomeScreen";
// import LibraryScreen from "../pages/newUI/LibraryScreen";
// import CreateSongScreen from "../pages/newUI/CreateSongScreen";
// import ContactScreen from "../pages/newUI/ContactScreen";
// import { TouchableOpacity } from "react-native";

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#fff" },
//         headerTintColor: "#000",
//         drawerActiveTintColor: "#f97316", // оранжевый (пример HeroUI)
//         drawerLabelStyle: { fontWeight: "600" },
//       }}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: "Home",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Library"
//         component={LibraryScreen}
//         options={{
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="library-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Create"
//         component={CreateSongScreen}
//         options={{
//           title: "Create Song",
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="musical-notes-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Contact"
//         component={ContactScreen}
//         options={{
//           drawerIcon: ({ color, size }) => (
//             <Ionicons name="call-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Main"
//         component={HomeScreen} // или компонент для главного экрана
//         options={({ navigation }) => ({
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//               <Ionicons
//                 name="menu"
//                 size={30}
//                 color="black"
//                 style={{ marginLeft: 15 }}
//               />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => navigation.navigate("SignInScreen")}
//             >
//               <Ionicons
//                 name="person-outline"
//                 size={30}
//                 color="black"
//                 style={{ marginRight: 15 }}
//               />
//             </TouchableOpacity>
//           ),
//         })}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import HomeScreen from "../pages/newUI/HomeScreen";
import LibraryScreen from "../pages/newUI/LibraryScreen";
import CreateSongScreen from "../pages/newUI/createSongScreen/CreateSongScreen";
import ContactScreen from "../pages/newUI/ContactScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
        drawerActiveTintColor: "#f97316", // оранжевый (пример HeroUI)
        drawerLabelStyle: { fontWeight: "600" },
      }}
    >
      {/* Убираем экран Main из меню */}
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons
                name="menu"
                size={30}
                color="black"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Ionicons
                name="person-outline"
                size={30}
                color="black"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Library"
        component={LibraryScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Ionicons
                name="person-outline"
                size={30}
                color="black"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="CreateSongScreen"
        component={CreateSongScreen}
        options={({ navigation }) => ({
          title: "Create Song",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="musical-notes-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Ionicons
                name="person-outline"
                size={30}
                color="black"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={({ navigation }) => ({
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
            >
              <Ionicons
                name="person-outline"
                size={30}
                color="black"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
