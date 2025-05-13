import React, { useEffect, useRef, useState } from "react";
import { View, Animated, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const zodiacIcons = [
  "zodiac-aries",
  "zodiac-taurus",
  "zodiac-gemini",
  "zodiac-cancer",
  "zodiac-leo",
  "zodiac-virgo",
  "zodiac-libra",
  "zodiac-scorpio",
  "zodiac-sagittarius",
  "zodiac-capricorn",
  "zodiac-aquarius",
  "zodiac-pisces",
];

const cosmicColors = [
  "#ff6ec7",
  "#6eafff",
  "#8e44ad",
  "#00ffe7",
  "#ff9a00",
  "#bb00ff",
];

export default function ZodiacLoader() {
  const [index, setIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setIndex((prev) => (prev + 1) % zodiacIcons.length);
        setColorIndex((prev) => (prev + 1) % cosmicColors.length);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Icon
          name={zodiacIcons[index]}
          size={70}
          color={cosmicColors[colorIndex]}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
});
