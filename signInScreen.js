import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient"; // Изменено
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native"; // Добавлено

const SignInScreen = () => {
  const navigation = useNavigation(); // Используем хук навигации

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Здесь ты можешь отправить данные на сервер
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
            {/* Логотип */}
            <View style={styles.logo}>
              <SvgUri
                width="290"
                height="96"
                source={require("./assets/Bollywood Hero.svg")}
              />
            </View>

            {/* Email */}
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

            {/* Пароль */}
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

            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("Авторизация")}
            >
              <Text style={styles.buttonText}>Войти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Переход к восстановлению пароля")}
            >
              <Text style={styles.forgotPassword}>Забыли пароль?</Text>
            </TouchableOpacity>

            <View style={styles.createAccountContainer}>
              <Text style={styles.createAccountText}>
                Еще нет аккаунта?{" "}
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text style={styles.createAccount}>Создать</Text>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
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
    alignItems: "center", // Центрируем все элементы в контейнере
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
  email: Yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  password: Yup.string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен"),
});

export default SignInScreen;
