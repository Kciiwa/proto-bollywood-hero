import React, { useState } from "react";
import { Formik } from "formik";
import { View, Text, TouchableOpacity } from "react-native";
import { Logo } from "../../../../shared/ui/Logo";
import { useNavigation } from "@react-navigation/native";
import { signInValidationSchema } from "../model/validation";
import { styles } from "../styles/signInFormStyles";
import InputField from "../../../../shared/components/InputField";
import Button from "../../../../shared/components/Button";
import Checkbox from "expo-checkbox";

export const SignInForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
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
        <View style={[styles.gradient, styles.background]}>
          <View style={styles.logo}>
            <Logo />
          </View>
          <Button
            onPress={() => {
              console.log("Sign in with Google");
              navigation.navigate("UserForm");
            }}
            text="Sign in with Google"
            color="red"
            style={styles.buttonSignWith}
          />
          <Button
            onPress={() => {
              console.log("Sign in with Apple");
              navigation.navigate("UserForm");
            }}
            text="Sign in with Apple"
            color="black"
            style={styles.buttonSignWith}
          />

          <Text style={styles.textOr}>or</Text>

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

          <View style={{ alignSelf: "flex-start", marginTop: 12 }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <Checkbox
                value={rememberMe}
                onValueChange={setRememberMe}
                color={rememberMe ? "rgb(44, 101, 255)" : undefined}
              />
              <Text style={{ marginLeft: 8, fontSize: 14 }}>Remember me</Text>
            </TouchableOpacity>
          </View>

          <Button
            onPress={handleSubmit}
            text="Sign in"
            color="black"
            style={styles.buttonSubmit}
          />

          <View style={styles.createAccountContainer}>
            <Text style={styles.createAccountText}>
              Not a member?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.createAccount}>Create an account.</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};
