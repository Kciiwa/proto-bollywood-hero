import React, { useState } from "react";
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
  multiline = false,
  numberOfLines = 4,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 1)";
    } else if (isFocused) {
      return "rgba(17, 17, 19, 0.9)";
    } else {
      return "rgba(17, 17, 19, 0.2)";
    }
  };

  const getBackgroundColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 0.1)";
    } else {
      return "transparent";
    }
  };

  const getTextColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 1)";
    } else {
      return "rgba(29, 29, 29, 0.66)";
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          {
            borderColor: getBorderColor(),
            backgroundColor: getBackgroundColor(),
            color: getTextColor(),
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={"rgba(45,45,45,0.66)"}
        onChangeText={onChangeText}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur(e);
        }}
        onFocus={() => setIsFocused(true)}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        textAlignVertical={multiline ? "top" : "center"}
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
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 12,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
  },
  multilineInput: {
    height: 120,
    paddingTop: 10,
    paddingBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    alignSelf: "flex-start",
  },
});

export default InputField;
