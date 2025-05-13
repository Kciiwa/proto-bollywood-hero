import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!agreeTerms) {
      Alert.alert(
        "Ошибка",
        "Пожалуйста, согласитесь с условиями использования."
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Ошибка", "Пароли не совпадают.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Регистрация успешна:", user.email);
      navigation.navigate("Main");
    } catch (error) {
      console.error("Ошибка регистрации:", error.message);
      Alert.alert("Ошибка регистрации", error.message);
    }
  };

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

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#83838A"
            />
          </View>
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
              placeholder="Create a password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#83838A"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
              text="I agree to the Terms"
              textStyle={{ textDecorationLine: "none", fontSize: 14 }}
              isChecked={agreeTerms}
              onPress={() => setAgreeTerms(!agreeTerms)}
            />
          </View>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.link}>Read terms</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.primary]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("SignInScreen")}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;

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
    paddingTop: 22,
    paddingLeft: 10,
    marginBottom: 12,
    height: 64,
  },
  label: {
    position: "absolute",
    top: 8,
    left: 14,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 6,
    color: "#83838A",
  },
  input: {},
  rememberRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 200,
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
    alignItems: "center",
    marginTop: 12,
  },
  footerText: {
    color: "#6B7280",
  },
});
