import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const RadioButton = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onSelect}>
      <View
        style={[styles.radioButton, selected && styles.radioButtonSelected]}
      />
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const RadioGroup = ({ options, selectedValue, onSelect }) => {
  return (
    <View style={styles.radioGroup}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={selectedValue === option.value}
          onSelect={() => onSelect(option.value)}
        />
      ))}
    </View>
  );
};

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.any.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 10,
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "rgba(17, 17, 19, 0.5)",
    marginRight: 8,
  },
  radioButtonSelected: {
    borderColor: "rgb(44, 101, 255)",
  },
  radioButtonLabel: {
    fontSize: 16,
    color: "rgba(29, 29, 29, 0.66)",
  },
});

export default RadioGroup;
