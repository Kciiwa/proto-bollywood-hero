import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const SongTitle = ({ title }) => {
  const [titlePressed, setTitlePressed] = useState(false);

  return (
    <TouchableOpacity
      onPressIn={() => setTitlePressed(true)}
      onPressOut={() => setTitlePressed(false)}
    >
      <Text
        style={[
          styles.title,
          {
            color: titlePressed
              ? "rgba(17, 17, 19, 0.2)"
              : "rgba(17, 17, 19, 0.9)",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

SongTitle.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default SongTitle;
