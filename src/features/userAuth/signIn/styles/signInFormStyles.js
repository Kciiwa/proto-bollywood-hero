import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  error: {
    color: "white",
    marginTop: -20,
    marginBottom: 10,
    fontSize: 14,
    alignSelf: "flex-start",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  gradient: {
    flex: 1,
    padding: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 290,
    height: 96,
    marginBottom: 64,
  },
  buttonSignWith: {
    marginBottom: 12,
  },
  forgotPassword: {
    marginTop: 16,
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 16,
    alignSelf: "flex-end",
  },
  createAccountContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  createAccountText: {
    color: "rgb(161, 161, 161)",
    fontSize: 16,
  },
  createAccount: {
    textDecorationLine: "underline",
    fontSize: 16,
    marginBottom: -5,
  },
  buttonSubmit: {
    marginTop: 16,
  },
  textOr: {
    fontFamily: "Inter",
    fontSize: 14,
    marginBottom: 12,
  },
});
