/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../shared/components/InputField";
import DateInputField from "../../shared/components/DateInputField";
import RadioGroup from "../../shared/components/RadioButton"; // Ваш компонент RadioGroup
import Button from "../../shared/components/Button";
import { Image } from "react-native";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Имя обязательно"),
  birthdate: Yup.string().required("Дата рождения обязательна"),
  gender: Yup.string().required("Пол обязателен"),
  height: Yup.string().required("Рост обязателен"),
  weight: Yup.string().required("Вес обязателен"),
  city: Yup.string().required("Город обязателен"),
  description: Yup.string().required("Описание обязательно"),
});

const UserFormScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    birthdate: "",
    gender: "М", // По умолчанию выбран мужской пол
    height: "",
    weight: "",
    city: "",
    description: "",
  };

  const handleSubmit = (values) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Song", {
        userData: values,
        songData: {
          title: "Rahul the Rising Star",
          imageUrl: Image.resolveAssetSource(
            require("../../assets/musicIcon.jpg")
          ).uri,
        },
      });
    }, 3000);

    console.log("Данные формы:", values);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#FFD700" />
          <Text style={styles.loaderText}>🎤 Генерация песни...</Text>
        </View>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View style={styles.form}>
              <Text style={styles.title}>🌟 Песня о тебе! 🌟</Text>

              <Text style={styles.label}>Имя</Text>
              <InputField
                placeholder="Введите ваше имя"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                error={errors.name}
                touched={touched.name}
              />

              <Text style={styles.label}>Дата рождения</Text>

              <DateInputField
                placeholder="Введите вашу дату рождения"
                value={values.birthdate}
                onChange={handleChange("birthdate")}
                touched={touched.birthdate}
                error={errors.birthdate}
              />

              <Text style={styles.label}>Пол</Text>
              <View style={styles.radioWrapper}>
                <RadioGroup
                  options={[
                    { label: "Мужской", value: "М" },
                    { label: "Женский", value: "Ж" },
                    { label: "Это секрет", value: "секрет" },
                  ]}
                  selectedValue={values.gender}
                  onSelect={(value) => setFieldValue("gender", value)}
                />
              </View>

              <Text style={styles.label}>Рост (в см)</Text>
              <InputField
                placeholder="Введите ваш рост"
                value={values.height}
                onChangeText={handleChange("height")}
                onBlur={handleBlur("height")}
                error={errors.height}
                touched={touched.height}
                keyboardType="numeric"
              />

              <Text style={styles.label}>Вес (в кг)</Text>
              <InputField
                placeholder="Введите ваш вес"
                value={values.weight}
                onChangeText={handleChange("weight")}
                onBlur={handleBlur("weight")}
                error={errors.weight}
                touched={touched.weight}
                keyboardType="numeric"
              />

              <Text style={styles.label}>Город рождения</Text>
              <InputField
                placeholder="Введите ваш город рождения"
                value={values.city}
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                error={errors.city}
                touched={touched.city}
              />

              <Text style={styles.label}>Опишите себя</Text>
              <InputField
                placeholder="Напишите пару слов о себе"
                value={values.description}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                error={errors.description}
                touched={touched.description}
                multiline={true}
              />

              <Button onPress={handleSubmit} text="Generate" color="black" />
            </View>
          )}
        </Formik>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  loaderText: {
    color: "#8B0000",
    marginTop: 20,
    fontSize: 16,
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
    fontFamily: "Indie Flower",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(17, 17, 19, 0.9)",
    marginBottom: 5,
  },
  radioWrapper: {
    marginBottom: 15,
  },
});

export default UserFormScreen;
