import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import UserFormScreen from "./form";
import SignInForm from "./signInScreen";
import AppNavigator from "./AppNavigator";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
