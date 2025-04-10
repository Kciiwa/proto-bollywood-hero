import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Данные формы:", values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <ImageBackground style={styles.background}>
          <LinearGradient
            colors={[
              "rgba(255, 0, 72, 0.8)",
              "rgba(255, 0, 72, 0.6)",
              "rgba(255, 183, 0, 0.75)",
            ]}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 1, y: 0.9 }}
            style={styles.gradient}
          >
            <View style={styles.logo}>
              <SvgUri
                width="290"
                height="96"
                source={require("./assets/Bollywood Hero.svg")}
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Введите имя"
              placeholderTextColor={"rgba(45,45,45,0.66)"}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Введите email"
              placeholderTextColor={"rgba(45,45,45,0.66)"}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Введите пароль"
              placeholderTextColor={"rgba(45,45,45,0.66)"}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Подтвердите пароль"
              placeholderTextColor={"rgba(45,45,45,0.66)"}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              secureTextEntry
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </TouchableOpacity>

            <View style={styles.createAccountContainer}>
              <Text style={styles.createAccountText}>
                Уже есть аккаунт?{" "}
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                  <Text style={styles.createAccount}>Войти</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 16,
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Имя обязательно"),
  email: Yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  password: Yup.string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Подтверждение пароля обязательно"),
});

export default SignUpScreen;
