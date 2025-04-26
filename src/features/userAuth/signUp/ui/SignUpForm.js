import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../../../shared/components/InputField";
import Button from "../../../../shared/components/Button";
import { validationSchema } from "../model/validation";
import PropTypes from "prop-types";
import { styles } from "../styles/signUpFormStyles";
import { Logo } from "../../../../shared/ui/Logo";

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
        <View style={(styles.background, styles.gradient)}>
          <View style={styles.logo}>
            <Logo />
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

          <Button onPress={handleSubmit} text="Join us" color="black" />

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
        </View>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
