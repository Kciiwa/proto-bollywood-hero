import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const AudioControlButtons = ({ isPlaying, onPlayPause, onShare, onSave }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <View style={styles.buttonsContainer}>
      {/* Кнопка Share */}
      <TouchableOpacity
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        onPress={onShare}
      >
        <Ionicons
          name="share-social"
          size={32}
          style={[
            styles.icon,
            {
              color: buttonPressed
                ? "rgba(17, 17, 19, 0.2)"
                : "rgba(17, 17, 19, 0.9)",
            },
          ]}
        />
      </TouchableOpacity>

      {/* Кнопка Play/Pause */}
      <View style={styles.audioControls}>
        <TouchableOpacity
          onPressIn={() => setButtonPressed(true)}
          onPressOut={() => setButtonPressed(false)}
          onPress={onPlayPause}
        >
          <Ionicons
            name={isPlaying ? "pause-outline" : "play"}
            size={80}
            color={
              buttonPressed ? "rgba(17, 17, 19, 0.2)" : "rgba(17, 17, 19, 0.9)"
            }
          />
        </TouchableOpacity>
      </View>

      {/* Кнопка Save */}
      <TouchableOpacity
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        onPress={onSave}
      >
        <Ionicons
          name="save"
          size={32}
          style={[
            styles.icon,
            {
              color: buttonPressed
                ? "rgba(17, 17, 19, 0.2)"
                : "rgba(17, 17, 19, 0.9)",
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

AudioControlButtons.propTypes = {
  onPlayPause: PropTypes.func,
  onSave: PropTypes.func,
  onShare: PropTypes.func,
  isPlaying: PropTypes.bool,
  buttonPressed: PropTypes.bool,
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  icon: {
    margin: 10,
  },
  audioControls: {
    alignItems: "center",
  },
});

export default AudioControlButtons;
