import React, { useRef } from "react";
import Slider from "@react-native-community/slider";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Timeline = ({ onValueChange, onSlidingComplete, value }) => {
  const sliderRef = useRef(null);

  return (
    <View style={styles.timelineContainer}>
      <Slider
        ref={sliderRef}
        style={styles.timelineSlider}
        value={value}
        minimumValue={0}
        maximumValue={1}
        thumbTintColor="rgba(17, 17, 19, 0.9)"
        minimumTrackTintColor="rgba(17, 17, 19, 0.9)"
        maximumTrackTintColor="rgba(17, 17, 19, 0.2)"
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
      />
    </View>
  );
};

Timeline.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onSlidingComplete: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  timelineContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  timelineSlider: {
    width: "100%",
    height: 40,
  },
});

export default Timeline;
