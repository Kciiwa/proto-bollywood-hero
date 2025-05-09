import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const CustomDropdown = ({ label, value, options, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (option) => {
    onSelect(option.value);
    setIsVisible(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || "Select option";

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.selectedText}>{selectedLabel}</Text>
        <Ionicons name="chevron-down" size={20} color="#555" />
      </TouchableOpacity>

      <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)}>
        <View style={styles.modalContent}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CustomDropdown;

CustomDropdown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape),
  onSelect: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: "#F4F4F5",
    borderWidth: 1,
    borderColor: "#F4F4F5",
    borderRadius: 14,
    padding: 12,
    paddingTop: 26,
    height: 64,
  },
  label: {
    // marginBottom: 6,
    // fontSize: 14,
    // fontWeight: "600",
    position: "absolute",
    top: 8,
    left: 14,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 6,
    color: "#83838A",
  },
  dropdown: {
    // borderWidth: 1,
    // borderColor: "#F4F4F5",
    // borderRadius: 14,
    // padding: 12,
    // paddingTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedText: {
    fontSize: 16,
    color: "#000",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    maxHeight: 300,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionText: {
    fontSize: 16,
  },
});
