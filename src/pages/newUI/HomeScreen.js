import PropTypes from "prop-types";
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

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={{
            uri: "https://img.heroui.chat/movie?w=600&h=400&u=bollywood1",
          }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroText}>
          <Text style={styles.title}>Create Your Own Bollywood Songs</Text>
          <Text style={styles.subtitle}>
            Generate personalized Bollywood music with AI. Express yourself
            through the magic of Indian music.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CreateSongScreen")}
          >
            <Icon
              name="music"
              size={20}
              color="#FFF"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Create Your Song</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feature Cards */}
      <View style={styles.cardGrid}>
        <View style={styles.card}>
          <Icon name="wand" size={32} color="#FF9800" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>AI-Powered</Text>
          <Text style={styles.cardText}>
            Create unique songs using advanced AI technology
          </Text>
        </View>

        <View style={styles.card}>
          <Icon
            name="music"
            size={32}
            color="#FF9800"
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Bollywood Style</Text>
          <Text style={styles.cardText}>
            Authentic Indian music elements and compositions
          </Text>
        </View>

        <View style={styles.card}>
          <Icon
            name="share"
            size={32}
            color="#FF9800"
            style={styles.cardIcon}
          />
          <Text style={styles.cardTitle}>Easy Sharing</Text>
          <Text style={styles.cardText}>
            Share your creations with friends and family
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FFF3E0",
  },
  heroSection: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 32,
  },
  heroText: {
    flex: 1,
    marginBottom: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF9800",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    color: "#374151",
    marginBottom: 16,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FF9800",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonIcon: {
    marginRight: 8,
  },
  heroImage: {
    width: "100%",
    height: 400,
    borderRadius: 12,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 8,
    // elevation: 3,
  },
  cardGrid: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});
