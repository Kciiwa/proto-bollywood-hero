import React from "react";
import { Formik } from "formik";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { Logo } from "../../../../shared/ui/Logo";
import { useNavigation } from "@react-navigation/native";
import { signInValidationSchema } from "../model/validation";
import { styles } from "../styles/signInFormStyles";

export const SignInForm = () => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={signInValidationSchema}
      onSubmit={(values) => {
        console.log("Данные формы:", values);
        navigation.navigate("UserForm");
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
              <Logo />
            </View>

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

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
