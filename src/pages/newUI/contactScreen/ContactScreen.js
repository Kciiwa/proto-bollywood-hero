import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./ContactScreenStyles";
import CustomInput from "../../../shared/components/InputField";

// Схема валидации через Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function ContactScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Contact Us</Text>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={(values, actions) => {
            console.log("Form submitted:", values);
            actions.resetForm(); // очищаем форму после отправки
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
            <View style={styles.card}>
              <View style={styles.inputGroup}>
                <CustomInput
                  label="Name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  placeholder="Enter your name"
                  iconName="user"
                  iconSize={20}
                  keyboardType="text"
                  error={errors.name}
                  touched={touched.name}
                />
              </View>
              <View style={styles.inputGroup}>
                <CustomInput
                  label="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Enter your email"
                  iconName="mail"
                  iconSize={20}
                  keyboardType="email-address"
                  error={errors.email}
                  touched={touched.email}
                />
              </View>

              <View style={styles.inputGroup}>
                <CustomInput
                  label="Message"
                  value={values.message}
                  onChangeText={handleChange("message")}
                  onBlur={handleBlur("message")}
                  placeholder="How can we help you?"
                  keyboardType="text"
                  error={errors.message}
                  touched={touched.message}
                  multiline
                />
              </View>

              {/* Submit Button */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Icon
                  name="send"
                  size={20}
                  color="#FFF"
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Send Message</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        {/* Contact Info Cards */}
        <View style={styles.cardGrid}>
          <View style={styles.infoCard}>
            <Icon name="mail" size={24} color="#FF9800" />
            <Text style={styles.infoTitle}>Email</Text>
            <Text style={styles.infoText}>support@bollywoodhero.com</Text>
          </View>
          <View style={styles.infoCard}>
            <Icon name="phone" size={24} color="#FF9800" />
            <Text style={styles.infoTitle}>Phone</Text>
            <Text style={styles.infoText}>+91 123 456 7890</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ContactScreen;
