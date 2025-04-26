import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import PropTypes from "prop-types";

const SongScreen = ({ route }) => {
  const { userData } = route.params;
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      // eslint-disable-next-line no-undef
      require("../../assets/audio/🎵 Title_ “Rahul the Rising Star”.mp3")
    );
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync();
  }

  async function stopSound() {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // 🧹 Очистка при выходе
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎵 Ваша песня почти готова!</Text>
      <Text style={styles.text}>Вот данные, которые мы получили:</Text>
      <Text style={styles.text}>Имя: {userData.name}</Text>
      <Text style={styles.text}>Дата рождения: {userData.birthdate}</Text>
      <Text style={styles.text}>Пол: {userData.gender}</Text>
      <Text style={styles.text}>Рост: {userData.height} см</Text>
      <Text style={styles.text}>Вес: {userData.weight} кг</Text>
      <Text style={styles.text}>Город: {userData.city}</Text>
      <Text style={styles.text}>Описание: {userData.description}</Text>
      <Text style={styles.text}>🎶 Послушайте свою песню ниже:</Text>

      <View style={styles.audioControls}>
        {!isPlaying ? (
          <Button title="▶️ Воспроизвести песню" onPress={playSound} />
        ) : (
          <Button title="⏹️ Остановить" onPress={stopSound} />
        )}
      </View>
    </View>
  );
};

// Добавляем валидацию пропсов
SongScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        birthdate: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e91e63",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  audioControls: {
    marginTop: 30,
  },
});

export default SongScreen;
