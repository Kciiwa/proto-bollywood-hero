import PropTypes from "prop-types";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

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
  iconName,
  iconSize = 20,
  error,
  touched,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error && touched) return "red";
    if (isFocused) return "#000";
    return "#F4F4F5";
  };

  const inputPaddingLeft = iconName ? 32 : 4;

  return (
    <>
      <View
        style={[
          styles.inputWrapper,
          multiline && styles.multilineWrapper,
          { borderColor: getBorderColor() },
          {
            backgroundColor:
              error && touched ? "rgba(255, 0, 0, 0.1)" : "#F4F4F5",
          },
        ]}
      >
        <Text style={styles.label}>{label}</Text>

        {iconName && (
          <Icon
            name={iconName}
            size={iconSize}
            color="#000"
            style={styles.icon}
          />
        )}

        <TextInput
          style={[
            styles.input,
            multiline && styles.multilineInput,
            {
              paddingLeft: inputPaddingLeft,
            },
            style,
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#83838A"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          textAlignVertical={multiline ? "top" : "center"}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
        />
      </View>
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </>
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
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  error: PropTypes.string,
  touched: PropTypes.bool,
  onBlur: PropTypes.object,
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#F4F4F5",
    borderRadius: 14,
    backgroundColor: "#F4F4F5",
    paddingTop: 22,
    paddingLeft: 10,
    marginBottom: 10,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
  },
  multilineWrapper: {
    height: 120,
    paddingTop: 0,
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
    paddingTop: 0,
    paddingBottom: 4,
  },
  icon: {
    position: "absolute",
    left: 14,
    zIndex: 1,
    top: 31,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginTop: -4,
    marginBottom: 5,
  },
});

export default CustomInput;
