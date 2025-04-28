import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet } from "react-native";

const CoverImage = ({ imageUrl }) => {
  return <Image source={{ uri: imageUrl }} style={styles.coverImage} />;
};

const styles = StyleSheet.create({
  coverImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
});

CoverImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default CoverImage;
