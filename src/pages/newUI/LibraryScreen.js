import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
// import ZodiacLoader from "../../shared/components/loader";

const songs = [
  {
    id: 1,
    title: "Summer Romance",
    date: "2024-03-15",
    image:
      "https://avatars.mds.yandex.net/i?id=5e34891bb7167b39dce70937bd891a303b5efb9c-4346197-images-thumbs&n=13",
  },
  {
    id: 2,
    title: "Dancing Dreams",
    date: "2024-03-14",
    image:
      "https://avatars.mds.yandex.net/i?id=451c11df8552827c0148a66db8e8953c6e9895af-5888810-images-thumbs&n=13",
  },
  {
    id: 3,
    title: "Monsoon Magic",
    date: "2024-03-13",
    image:
      "https://avatars.mds.yandex.net/i?id=ddeb8e324395cd3b3f8ef8cec6a397999cef87af-5541772-images-thumbs&n=13",
  },
];

const LibraryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <ZodiacLoader /> */}
      <Text style={styles.header}>Your Song Library</Text>

      <View style={styles.grid}>
        {songs.map((song) => (
          <View key={song.id} style={styles.card}>
            <Image
              source={{ uri: song.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.footer}>
              <View>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.date}>{song.date}</Text>
              </View>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="play" size={20} color="#FF9800" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FFF3E0",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 24,
    width: "100%",
    // Для более точного отображения на 2–3 колонки можно использовать FlatList с numColumns
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    color: "#6B7280", // примерно соответствует text-default-500
    marginTop: 4,
  },
  iconButton: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: "#FFF3E0",
  },
});
