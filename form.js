import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const UserFormScreen = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("М");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // Здесь можно отправить данные на сервер или в API
    console.log({
      name,
      birthdate,
      gender,
      height,
      weight,
      city,
      description,
    });
  };

  return (
    <ImageBackground
      source={require("./assets/i.webp")}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>🌟 Болливудская Песня О Тебе! 🌟</Text>

          {/* Имя */}
          <Text style={styles.label}>Имя</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Введите ваше имя"
            placeholderTextColor="#8B0000"
          />

          {/* Дата рождения */}
          <Text style={styles.label}>Дата рождения</Text>
          <TextInput
            style={styles.input}
            value={birthdate}
            onChangeText={setBirthdate}
            placeholder="Введите вашу дату рождения"
            placeholderTextColor="#8B0000"
            keyboardType="numeric"
          />

          {/* Пол */}
          <Text style={styles.label}>Пол</Text>
          <Picker
            selectedValue={gender}
            style={styles.picker}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Мужской" value="М" />
            <Picker.Item label="Женский" value="Ж" />
            <Picker.Item label="Другое" value="другое" />
          </Picker>

          {/* Рост */}
          <Text style={styles.label}>Рост (в см)</Text>
          <TextInput
            style={styles.input}
            value={height}
            onChangeText={setHeight}
            placeholder="Введите ваш рост"
            placeholderTextColor="#8B0000"
            keyboardType="numeric"
          />

          {/* Вес */}
          <Text style={styles.label}>Вес (в кг)</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            placeholder="Введите ваш вес"
            placeholderTextColor="#8B0000"
            keyboardType="numeric"
          />

          {/* Город рождения */}
          <Text style={styles.label}>Город рождения</Text>
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={setCity}
            placeholder="Введите ваш город рождения"
            placeholderTextColor="#8B0000"
          />

          {/* Описание себя */}
          <Text style={styles.label}>Опишите себя</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Напишите пару слов о себе"
            placeholderTextColor="#8B0000"
            multiline
          />

          {/* Кнопка отправки */}
          <Button
            title="Генерировать песню"
            onPress={handleSubmit}
            color="#FFD700"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // легкий фон, чтобы текст был виден
    borderRadius: 20,
  },
  form: {
    marginTop: 30,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFD700",
    marginBottom: 20,
    fontFamily: "Indie Flower", // Индийский стиль шрифта (можно использовать собственный шрифт или выбрать из списка)
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8B0000", // Красный, как в индийских узорах
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: "#FFD700",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: "white",
    fontSize: 16,
    color: "#333",
    fontFamily: "Indie Flower",
  },
  picker: {
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: "#FFD700",
    backgroundColor: "white",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default UserFormScreen;
