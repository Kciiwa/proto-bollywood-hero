/* eslint-disable no-undef */

import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import PropTypes from "prop-types";
import CoverImage from "../../shared/components/CoverImage";
import SongTitle from "../../shared/components/SongTitle";
import Timeline from "../../shared/components/Timeline";
import AudioControlButtons from "../../shared/components/AudioControlButtons";

const SongScreen = ({ route }) => {
  const { songData } = route.params;
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const progressRef = useRef(0);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/🎵 Title_ “Rahul the Rising Star”.mp3"),
      { positionMillis: currentPosition * 1000 }
    );
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        const position = status.positionMillis / status.durationMillis;
        progressRef.current = position;
        setCurrentPosition(position);
      }
    });
  }

  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setCurrentPosition(progressRef.current);
    }
  }

  const handleSeek = async (newProgress) => {
    if (sound) {
      const status = await sound.getStatusAsync();
      const positionMillis = newProgress * status.durationMillis;
      await sound.setPositionAsync(positionMillis);
      setCurrentPosition(newProgress);
    }
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <CoverImage imageUrl={songData.imageUrl} />
      <SongTitle title={songData.title} />
      <Timeline
        onValueChange={(newProgress) => {
          progressRef.current = newProgress;
        }}
        onSlidingComplete={handleSeek}
        value={currentPosition}
      />
      <AudioControlButtons
        isPlaying={isPlaying}
        onPlayPause={isPlaying ? stopSound : playSound}
        onShare={() => alert("Поделиться песней")}
        onSave={() => alert("Сохранить песню")}
      />
    </View>
  );
};

SongScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      songData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default SongScreen;
