import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
// import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import GoogleIcon from "react-native-vector-icons/FontAwesome";
import AppleIcon from "react-native-vector-icons/FontAwesome";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoWrapper}>
          <View style={styles.iconContainer}>
            <Icon name="music" size={32} color="#FF9800" />
            <Icon
              name="star"
              size={16}
              color="#FFD54F"
              style={styles.sparkle1}
            />
            <Icon
              name="star"
              size={14}
              color="#FFD54F"
              style={styles.sparkle2}
            />
          </View>
          <Text style={styles.title}>AstroJam</Text>
        </View>

        <TouchableOpacity style={[styles.button, styles.google]}>
          <GoogleIcon name="google" size={18} color="#fff" />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.apple]}>
          <AppleIcon name="apple" size={18} color="#fff" />
          <Text style={styles.buttonText}>Sign in with Apple</Text>
        </TouchableOpacity>

        <View style={styles.dividerWrapper}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#83838A"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#83838A"
            />
          </View>
        </View>

        <View style={styles.rememberRow}>
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={20}
              fillColor="#FF9800"
              unfillColor="#FFF"
              iconStyle={{ borderColor: "#999", borderRadius: 10 }}
              text="Remember me"
              textStyle={{ textDecorationLine: "none", fontSize: 14 }}
              isChecked={rememberMe}
              onPress={() => setRememberMe(!rememberMe)}
            />
          </View>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.button, styles.primary]}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Not a member?{" "}
            <Text
              style={styles.link}
              onPress={() => {
                // Заменить на navigation.navigate('SignUp') при наличии навигации
              }}
            >
              Create an account
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#FFF3E0",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  logoWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },
  iconContainer: {
    position: "relative",
  },
  sparkle1: {
    position: "absolute",
    top: -8,
    right: -8,
  },
  sparkle2: {
    position: "absolute",
    bottom: -6,
    right: -12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 14,
    marginBottom: 12,
    gap: 8,
    height: 50,
  },
  google: {
    backgroundColor: "#EA4335",
  },
  apple: {
    backgroundColor: "#000000",
  },
  primary: {
    backgroundColor: "#FF9800",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  dividerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 8,
    color: "#6B7280",
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#F4F4F5",
    borderRadius: 14,
    backgroundColor: "#F4F4F5",
    // padding: 10,
    paddingTop: 22,
    paddingLeft: 10,
    marginBottom: 12,
    height: 64,
  },
  label: {
    // fontSize: 14,
    // marginBottom: 4,
    // fontWeight: "500",
    // display: "absolute",
    // top: -4,
    // left: 3,
    // color: "#83838A",
    // height: 15,
    position: "absolute",
    top: 8,
    left: 14,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 6,
    color: "#83838A",
  },
  input: {
    // borderWidth: 1,
    // borderColor: "#F4F4F5",
    // borderRadius: 14,
    // backgroundColor: "#F4F4F5",
    // paddingBottom: 15,
    // marginBottom: 12,
    // height: 64,
  },
  rememberRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "center",
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  link: {
    color: "#FF9800",
    fontWeight: "500",
  },

  footer: {
    marginTop: 8,
    alignItems: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#6B7280",
  },
});
