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
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 1)"; // Красная граница при ошибке
    } else if (isFocused) {
      return "rgba(17, 17, 19, 0.9)"; // Жёлтая граница при фокусе
    } else {
      return "rgba(17, 17, 19, 0.2)"; // Обычная серая
    }
  };

  const getBackgroundColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 0.1)"; // Лёгкая красная заливка при ошибке
    } else {
      return "transparent"; // Прозрачный фон в норме
    }
  };

  const getTextColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 1)"; // Красный текст при ошибке
    } else {
      return "rgba(29, 29, 29, 0.66)"; // Обычный тёмно-серый текст
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
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
    marginBottom: 12,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    // marginBottom: 10,
    alignSelf: "flex-start",
  },
});

export default InputField;
