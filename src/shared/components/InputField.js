// import React, { useState } from "react";
// import { TextInput, Text, StyleSheet, View } from "react-native";
// import PropTypes from "prop-types";

// const InputField = ({
//   placeholder,
//   value,
//   onChangeText,
//   onBlur,
//   error,
//   touched,
//   secureTextEntry,
//   keyboardType,
//   multiline = false,
//   numberOfLines = 4,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   const getBorderColor = () => {
//     if (touched && error) {
//       return "rgba(227, 0, 0, 1)";
//     } else if (isFocused) {
//       return "rgba(17, 17, 19, 0.9)";
//     } else {
//       return "rgba(17, 17, 19, 0.2)";
//     }
//   };

//   const getBackgroundColor = () => {
//     if (touched && error) {
//       return "rgba(227, 0, 0, 0.1)";
//     } else {
//       return "transparent";
//     }
//   };

//   const getTextColor = () => {
//     if (touched && error) {
//       return "rgba(227, 0, 0, 1)";
//     } else {
//       return "rgba(29, 29, 29, 0.66)";
//     }
//   };

//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         style={[
//           styles.input,
//           multiline && styles.multilineInput,
//           {
//             borderColor: getBorderColor(),
//             backgroundColor: getBackgroundColor(),
//             color: getTextColor(),
//           },
//         ]}
//         placeholder={placeholder}
//         placeholderTextColor={"rgba(45,45,45,0.66)"}
//         onChangeText={onChangeText}
//         onBlur={(e) => {
//           setIsFocused(false);
//           onBlur(e);
//         }}
//         onFocus={() => setIsFocused(true)}
//         value={value}
//         secureTextEntry={secureTextEntry}
//         keyboardType={keyboardType}
//         multiline={multiline}
//         numberOfLines={multiline ? numberOfLines : 1}
//         textAlignVertical={multiline ? "top" : "center"}
//       />
//       {touched && error && <Text style={styles.error}>{error}</Text>}
//     </View>
//   );
// };

// InputField.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChangeText: PropTypes.func.isRequired,
//   onBlur: PropTypes.func.isRequired,
//   error: PropTypes.string,
//   touched: PropTypes.bool,
//   secureTextEntry: PropTypes.bool,
//   keyboardType: PropTypes.string,
//   multiline: PropTypes.bool,
//   numberOfLines: PropTypes.number,
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     width: "100%",
//     marginBottom: 12,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 15,
//   },
//   multilineInput: {
//     height: 120,
//     paddingTop: 10,
//     paddingBottom: 10,
//   },
//   error: {
//     color: "red",
//     fontSize: 14,
//     marginTop: 5,
//     alignSelf: "flex-start",
//   },
// });

// export default InputField;

// import PropTypes from "prop-types";
// import React from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// const CustomInput = ({
//   label,
//   value,
//   onChangeText,
//   placeholder,
//   secureTextEntry = false,
//   keyboardType = "default",
// }) => {
//   return (
//     <View style={styles.inputWrapper}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder={placeholder}
//         value={value}
//         onChangeText={onChangeText}
//         placeholderTextColor="#83838A"
//         secureTextEntry={secureTextEntry}
//         keyboardType={keyboardType}
//       />
//     </View>
//   );
// };

// CustomInput.propTypes = {
//   label: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChangeText: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
//   secureTextEntry: PropTypes.bool,
//   keyboardType: PropTypes.string,
// };

// const styles = StyleSheet.create({
//   inputWrapper: {
//     borderWidth: 1,
//     borderColor: "#F4F4F5",
//     borderRadius: 14,
//     backgroundColor: "#F4F4F5",
//     paddingTop: 22,
//     paddingLeft: 10,
//     marginBottom: 12,
//     height: 64,
//   },
//   label: {
//     position: "absolute",
//     top: 8,
//     left: 14,
//     fontSize: 12,
//     fontWeight: "500",
//     marginBottom: 6,
//     color: "#83838A",
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: "#000",
//   },
// });

// export default CustomInput;

import PropTypes from "prop-types";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  multiline = false,
  numberOfLines = 4,
  style = {},
}) => {
  return (
    <View style={[styles.inputWrapper, multiline && styles.multilineWrapper]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.multilineInput, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#83838A"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        textAlignVertical={multiline ? "top" : "center"}
      />
    </View>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
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
  multilineWrapper: {
    height: 120, // Можно настроить под нужную высоту для многострочного поля
    paddingTop: 22,
    paddingBottom: 10,
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
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  multilineInput: {
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
  },
});

export default CustomInput;
