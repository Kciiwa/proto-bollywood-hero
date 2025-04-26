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
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "rgb(29, 29, 29)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
    color: "#000",
    textDecorationLine: "underline",
    fontSize: 16,
    marginBottom: -5,
  },
});
