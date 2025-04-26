import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const InputField = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  touched,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"rgba(45,45,45,0.66)"}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    color: "rgba(29, 29, 29, 0.66)",
  },
  error: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
});

export default InputField;
