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
  input: {
    width: "100%",
    height: 50,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 32,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: "rgba(29, 29, 29, 0.66)",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "rgb(29, 29, 29)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
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
    color: "#fff",
    fontSize: 16,
  },
  createAccount: {
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 16,
    marginBottom: -5,
  },
});
