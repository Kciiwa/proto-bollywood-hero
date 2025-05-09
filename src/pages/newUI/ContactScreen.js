import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

function ContactScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Contact Us</Text>

        {/* Contact Form Card */}
        <View style={styles.card}>
          {/* Name Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputWrapper}>
              <Icon name="user" size={20} color="#000" style={styles.icon} />
              <TextInput
                placeholder="Enter your name"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
              />
            </View>
          </View>

          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper}>
              <Icon name="mail" size={20} color="#000" style={styles.icon} />
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                style={styles.input}
              />
            </View>
          </View>

          {/* Message Textarea */}
          <View style={styles.inputGroup}>
            {/* <Text style={styles.label}>Message</Text> */}
            <View style={styles.textareaWrapper}>
              <TextInput
                placeholder="How can we help you?"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={styles.textarea}
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.button}>
            <Icon
              name="send"
              size={20}
              color="#FFF"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Info Cards */}
        <View style={styles.cardGrid}>
          {/* Email Card */}
          <View style={styles.infoCard}>
            <Icon name="mail" size={24} color="#FF9800" />
            <Text style={styles.infoTitle}>Email</Text>
            <Text style={styles.infoText}>support@bollywoodhero.com</Text>
          </View>

          {/* Phone Card */}
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

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
    backgroundColor: "#FFF3E0",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    position: "absolute",
    top: 12,
    left: 12,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#9CA3AF",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D1D5DB",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    paddingTop: 30,
  },
  textareaWrapper: {
    // paddingTop: 30,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  textarea: {
    height: 100,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#111827",
    textAlignVertical: "top",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FF9800",
    borderRadius: 10,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonIcon: {
    marginRight: 8,
  },
  cardGrid: {
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
  },
  infoCard: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontWeight: "600",
    marginTop: 8,
    fontSize: 16,
  },
  infoText: {
    color: "#6B7280",
    fontSize: 14,
    marginTop: 2,
    textAlign: "center",
  },
});
