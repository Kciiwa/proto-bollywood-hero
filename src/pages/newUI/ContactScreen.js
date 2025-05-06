// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { useTailwind } from "tailwind-rn";

// function Contact() {
//   const tailwind = useTailwind();
//   return (
//     <ScrollView style={tailwind("px-4 py-6")}>
//       <Text style={tailwind("text-3xl font-bold mb-6 text-center")}>
//         Contact Us
//       </Text>

//       {/* Card */}
//       <View style={tailwind("bg-white rounded-lg shadow p-4 mb-6")}>
//         <View style={tailwind("space-y-6")}>
//           {/* Input: Name */}
//           <View>
//             <Text style={tailwind("mb-1")}>Name</Text>
//             <View
//               style={tailwind("flex-row items-center border rounded px-3 py-2")}
//             >
//               <Feather name="user" size={20} style={tailwind("mr-2")} />
//               <TextInput
//                 placeholder="Enter your name"
//                 style={tailwind("flex-1")}
//               />
//             </View>
//           </View>

//           {/* Input: Email */}
//           <View>
//             <Text style={tailwind("mb-1")}>Email</Text>
//             <View
//               style={tailwind("flex-row items-center border rounded px-3 py-2")}
//             >
//               <Feather name="mail" size={20} style={tailwind("mr-2")} />
//               <TextInput
//                 placeholder="Enter your email"
//                 keyboardType="email-address"
//                 style={tailwind("flex-1")}
//               />
//             </View>
//           </View>

//           {/* Textarea */}
//           <View>
//             <Text style={tailwind("mb-1")}>Message</Text>
//             <TextInput
//               placeholder="How can we help you?"
//               multiline
//               numberOfLines={4}
//               textAlignVertical="top"
//               style={[
//                 tailwind("border rounded px-3 py-2"),
//                 { fontSize: 16, textAlign: "left" },
//               ]}
//             />
//           </View>

//           {/* Button */}
//           <TouchableOpacity
//             style={tailwind(
//               "bg-blue-500 py-3 rounded flex-row justify-center items-center"
//             )}
//           >
//             <Feather
//               name="send"
//               size={20}
//               color="white"
//               style={tailwind("mr-2")}
//             />
//             <Text style={tailwind("text-white font-semibold")}>
//               Send Message
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Contact Cards */}
//       <View
//         style={[
//           tailwind("flex-row justify-between"),
//           { flexWrap: "wrap", gap: 16 }, // вручную задаём отступ
//         ]}
//       >
//         {/* Email Card */}
//         <View
//           style={[
//             tailwind("bg-white rounded-lg shadow p-4 items-center mb-4"),
//             { width: "48%" },
//           ]}
//         >
//           <Feather name="mail" size={24} color="#3B82F6" />
//           <Text style={tailwind("font-semibold mt-2")}>Email</Text>
//           <Text style={{ color: "#6B7280" }}>support@bollywoodhero.com</Text>
//         </View>

//         {/* Phone Card */}
//         <View
//           style={[
//             tailwind("bg-white rounded-lg shadow p-4 items-center mb-4"),
//             { width: "48%" },
//           ]}
//         >
//           <Feather name="phone" size={24} color="#3B82F6" />
//           <Text style={tailwind("font-semibold mt-2")}>Phone</Text>
//           <Text style={{ color: "#6B7280" }}>+91 123 456 7890</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// export default Contact;

// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { useTailwind } from "tailwind-rn";

// export function Contact() {
//   const tailwind = useTailwind();
//   return (
//     <ScrollView style={tailwind("max-w-2xl mx-auto space-y-6 p-4")}>
//       <Text style={tailwind("text-3xl font-bold")}>Contact Us</Text>

//       {/* Card */}
//       <View style={tailwind("bg-white rounded-lg shadow p-4")}>
//         <View style={tailwind("space-y-6")}>
//           {/* Input: Name */}
//           <View>
//             <Text style={tailwind("mb-1")}>Name</Text>
//             <View
//               style={tailwind("flex-row items-center border rounded px-3 py-2")}
//             >
//               <Feather name="user" size={20} style={tailwind("mr-2")} />
//               <TextInput
//                 placeholder="Enter your name"
//                 style={tailwind("flex-1")}
//               />
//             </View>
//           </View>

//           {/* Input: Email */}
//           <View>
//             <Text style={tailwind("mb-1")}>Email</Text>
//             <View
//               style={tailwind("flex-row items-center border rounded px-3 py-2")}
//             >
//               <Feather name="mail" size={20} style={tailwind("mr-2")} />
//               <TextInput
//                 placeholder="Enter your email"
//                 keyboardType="email-address"
//                 style={tailwind("flex-1")}
//               />
//             </View>
//           </View>

//           {/* Textarea */}
//           <View>
//             <Text style={tailwind("mb-1")}>Message</Text>
//             <TextInput
//               placeholder="How can we help you?"
//               multiline
//               numberOfLines={4}
//               style={tailwind("border rounded px-3 py-2 text-base text-left")}
//               textAlignVertical="top"
//             />
//           </View>

//           {/* Button */}
//           <TouchableOpacity
//             style={tailwind(
//               "bg-blue-500 py-3 rounded flex-row justify-center items-center"
//             )}
//           >
//             <Feather
//               name="send"
//               size={20}
//               color="white"
//               style={tailwind("mr-2")}
//             />
//             <Text style={tailwind("text-white font-semibold")}>
//               Send Message
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Contact Cards */}
//       <View style={tailwind("grid sm:grid-cols-2 gap-4 mt-8")}>
//         {/* Email Card */}
//         <View
//           style={tailwind(
//             "bg-white rounded-lg shadow p-4 items-center space-y-2"
//           )}
//         >
//           <Feather name="mail" size={24} style={tailwind("text-primary-500")} />
//           <Text style={tailwind("font-semibold")}>Email</Text>
//           <Text style={tailwind("text-default-500")}>
//             support@bollywoodhero.com
//           </Text>
//         </View>

//         {/* Phone Card */}
//         <View
//           style={tailwind(
//             "bg-white rounded-lg shadow p-4 items-center space-y-2"
//           )}
//         >
//           <Feather
//             name="phone"
//             size={24}
//             style={tailwind("text-primary-500")}
//           />
//           <Text style={tailwind("font-semibold")}>Phone</Text>
//           <Text style={tailwind("text-default-500")}>+91 123 456 7890</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// import React from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import Icon from "react-native-vector-icons/Feather"; // Используем Feather как аналог lucide

// function ContactScreen() {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Contact Us</Text>

//       {/* Contact Form Card */}
//       <View style={styles.card}>
//         {/* Name Input */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Name</Text>
//           <View style={styles.inputWrapper}>
//             <Icon name="user" size={20} color="#9CA3AF" style={styles.icon} />
//             <TextInput
//               placeholder="Enter your name"
//               placeholderTextColor="#9CA3AF"
//               style={styles.input}
//             />
//           </View>
//         </View>

//         {/* Email Input */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Email</Text>
//           <View style={styles.inputWrapper}>
//             <Icon name="mail" size={20} color="#9CA3AF" style={styles.icon} />
//             <TextInput
//               placeholder="Enter your email"
//               placeholderTextColor="#9CA3AF"
//               keyboardType="email-address"
//               style={styles.input}
//             />
//           </View>
//         </View>

//         {/* Message Textarea */}
//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Message</Text>
//           <TextInput
//             placeholder="How can we help you?"
//             placeholderTextColor="#9CA3AF"
//             multiline
//             numberOfLines={4}
//             textAlignVertical="top"
//             style={[styles.input, styles.textarea]}
//           />
//         </View>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.button}>
//           <Icon name="send" size={20} color="#FFF" style={styles.buttonIcon} />
//           <Text style={styles.buttonText}>Send Message</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Contact Info Cards */}
//       <View style={styles.cardGrid}>
//         {/* Email Card */}
//         <View style={styles.infoCard}>
//           <Icon name="mail" size={24} color="#3B82F6" />
//           <Text style={styles.infoTitle}>Email</Text>
//           <Text style={styles.infoText}>support@bollywoodhero.com</Text>
//         </View>

//         {/* Phone Card */}
//         <View style={styles.infoCard}>
//           <Icon name="phone" size={24} color="#3B82F6" />
//           <Text style={styles.infoTitle}>Phone</Text>
//           <Text style={styles.infoText}>+91 123 456 7890</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// export default ContactScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     paddingBottom: 40,
//     maxWidth: 672, // ~max-w-2xl
//     alignSelf: "center",
//   },
//   title: {
//     fontSize: 24, // text-3xl
//     fontWeight: "700",
//     marginBottom: 24,
//   },
//   card: {
//     backgroundColor: "#FFF",
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 32,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "500",
//     marginBottom: 6,
//     color: "#111827",
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderColor: "#D1D5DB",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   icon: {
//     marginRight: 8,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: "#111827",
//   },
//   textarea: {
//     height: 100,
//     borderColor: "#D1D5DB",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   button: {
//     flexDirection: "row",
//     backgroundColor: "#3B82F6", // blue-500
//     borderRadius: 8,
//     paddingVertical: 14,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 8,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   buttonIcon: {
//     marginRight: 8,
//   },
//   cardGrid: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     marginHorizontal: -4,
//     borderWidth: 2,
//     borderColor: "red",
//   },
//   infoCard: {
//     marginHorizontal: 4,
//     marginBottom: 16,
//     backgroundColor: "#FFF",
//     borderRadius: 12,
//     padding: 20,
//     alignItems: "center",
//     width: "48%",
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 2,
//     borderWidth: 1,
//     borderColor: "blue",
//   },
//   infoTitle: {
//     fontWeight: "600",
//     marginTop: 8,
//     fontSize: 16,
//   },
//   infoText: {
//     color: "#6B7280", // text-default-500
//     fontSize: 14,
//     marginTop: 2,
//     textAlign: "center",
//   },
// });

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
