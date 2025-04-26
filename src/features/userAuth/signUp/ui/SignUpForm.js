import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../../../shared/components/InputField";
import Button from "../../../../shared/components/Button";
import { validationSchema } from "../model/validation";
import PropTypes from "prop-types";

const SignUpForm = ({ onSubmit }) => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.background}>
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
                // eslint-disable-next-line no-undef
                source={require("../../../../assets/Bollywood Hero.svg")}
              />
            </View>

            <InputField
              placeholder="Введите имя"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
            />

            <InputField
              placeholder="Введите email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              keyboardType="email-address"
            />

            <InputField
              placeholder="Введите пароль"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
            />

            <InputField
              placeholder="Подтвердите пароль"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              secureTextEntry
            />

            <Button onPress={handleSubmit} text="Зарегистрироваться" />

            <View style={styles.createAccountContainer}>
              <Text style={styles.createAccountText}>
                Уже есть аккаунт?{" "}
                <Text
                  style={styles.createAccount}
                  onPress={() => navigation.navigate("SignIn")}
                >
                  Войти
                </Text>
              </Text>
            </View>
          </LinearGradient>
        </View>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
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

export default SignUpForm;
