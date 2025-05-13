import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../shared/components/InputField";
import { styles } from "./CreateSongStyles";
import CustomButton from "../../../shared/components/Button";
import CustomDropdown from "../../../shared/components/CustomDropdown";
import { sendBirthData } from "../../../shared/api/astroApi";
import ZodiacLoader from "../../../shared/components/loader";

function CreateSongScreen() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");
  const [loading, setLoading] = useState(false);

  const familyMembers = [
    { value: "father", label: "Father" },
    { value: "mother", label: "Mother" },
    { value: "brother", label: "Brother" },
    { value: "sister", label: "Sister" },
    { value: "grandmother", label: "Grandmother" },
    { value: "grandfather", label: "Grandfather" },
    { value: "son", label: "Son" },
    { value: "daughter", label: "Daughter" },
    { value: "grandson", label: "Grandson" },
    { value: "aunt", label: "Aunt" },
    { value: "uncle", label: "Uncle" },
    { value: "nephew", label: "Nephew" },
    { value: "niece", label: "Niece" },
  ];

  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const validationSchema = Yup.object().shape({
    recipient: Yup.string().required("Recipient is required"),
    familyMember: Yup.string().when("recipient", {
      is: "family",
      then: (schema) => schema.required("Family member is required"),
      otherwise: (schema) => schema,
    }),

    name: Yup.string().required("Name is required"),
    zodiacSign: Yup.string().required("Zodiac sign is required"),
    gender: Yup.string().required("Gender is required"),
    height: Yup.number().required("Height is required").positive().integer(),
    weight: Yup.number().required("Weight is required").positive().integer(),
    cityOfBirth: Yup.string().required("City of Birth is required"),
    description: Yup.string().required("Description is required"),
    dateTimeOfBirth: Yup.date().required("Date and time of birth is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const { name, dateTimeOfBirth } = values;

      const date = dateTimeOfBirth.toISOString().split("T")[0];
      const time = dateTimeOfBirth.toTimeString().split(" ")[0];

      // TODO: заменить на реальные координаты города
      const lat = 55.751244;
      const lon = 37.618423;

      console.log("📨 Подготовленные данные для отправки:", {
        name,
        date,
        time,
        lat,
        lon,
      });

      const natalChart = await sendBirthData({
        name,
        date,
        time,
        lat,
        lon,
      });

      if (natalChart) {
        console.log("🧠 Натальная карта получена:", natalChart);
      } else {
        console.warn("⚠️ Не удалось получить натальную карту.");
      }

      console.log("📝 Все значения формы:", values);
    } catch (error) {
      console.error("❌ Ошибка при отправке данных:", error);
    }

    setLoading(false);
  };

  return (
    <>
      {loading && (
        <View style={styles.loaderContainer}>
          <ZodiacLoader />
        </View>
      )}
      {!loading && (
        <Formik
          initialValues={{
            recipient: "self",
            familyMember: "",
            name: "",
            zodiacSign: "",
            gender: "",
            height: "",
            weight: "",
            cityOfBirth: "",
            description: "",
            dateTimeOfBirth: new Date(),
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => {
            const handleDateTimeChange = (event, selectedValue) => {
              if (selectedValue) {
                const currentDate = new Date(values.dateTimeOfBirth);
                let updatedDateTime;

                if (pickerMode === "date") {
                  updatedDateTime = new Date(
                    selectedValue.getFullYear(),
                    selectedValue.getMonth(),
                    selectedValue.getDate(),
                    currentDate.getHours(),
                    currentDate.getMinutes()
                  );
                  setPickerMode("time");
                  setShowDatePicker(true);
                } else {
                  updatedDateTime = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    currentDate.getDate(),
                    selectedValue.getHours(),
                    selectedValue.getMinutes()
                  );
                  setShowDatePicker(false);
                }

                setFieldValue("dateTimeOfBirth", updatedDateTime);
              } else {
                setShowDatePicker(false);
              }
            };

            return (
              <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.card}>
                  <View style={styles.header}>
                    <Text style={styles.headerText}>A Song About You!</Text>
                  </View>

                  <Text style={styles.label}>Who is this song for?</Text>
                  <View style={styles.radioGroup}>
                    {["self", "family", "friend"].map((option) => (
                      <TouchableOpacity
                        key={option}
                        onPress={() => setFieldValue("recipient", option)}
                      >
                        <Text
                          style={[
                            styles.radio,
                            values.recipient === option && styles.radioSelected,
                          ]}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  {values.recipient === "family" && (
                    <>
                      <CustomDropdown
                        label="Select Family Member"
                        value={values.familyMember}
                        options={familyMembers}
                        onSelect={(val) => setFieldValue("familyMember", val)}
                      />
                    </>
                  )}

                  {(values.recipient === "self" ||
                    values.recipient === "friend" ||
                    (values.recipient === "family" && values.familyMember)) && (
                    <>
                      <CustomInput
                        label="Name"
                        placeholder="Enter name"
                        secureTextEntry={false}
                        value={values.name}
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                        style={styles.input}
                        error={errors.name}
                        touched={touched.name}
                      />

                      <TouchableOpacity
                        onPress={() => {
                          setPickerMode("date");
                          setShowDatePicker(true);
                        }}
                      >
                        <Text style={styles.dateLabel}>
                          Date & Time of Birth:{"\n"}
                        </Text>
                        <Text style={styles.dateText}>
                          {values.dateTimeOfBirth.toLocaleString()}
                        </Text>
                      </TouchableOpacity>

                      {showDatePicker && (
                        <DateTimePicker
                          value={values.dateTimeOfBirth}
                          mode={pickerMode}
                          display="default"
                          onChange={handleDateTimeChange}
                        />
                      )}

                      <Text style={styles.label}>Gender</Text>
                      <View style={styles.radioGroup}>
                        {["male", "female", "secret"].map((option) => (
                          <TouchableOpacity
                            key={option}
                            onPress={() => setFieldValue("gender", option)}
                          >
                            <Text
                              style={[
                                styles.radio,
                                values.gender === option &&
                                  styles.radioSelected,
                              ]}
                            >
                              {option.charAt(0).toUpperCase() + option.slice(1)}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>

                      <CustomInput
                        style={styles.input}
                        label="Height (cm)"
                        placeholder="Enter height"
                        keyboardType="numeric"
                        value={values.height}
                        onChangeText={handleChange("height")}
                        onBlur={handleBlur("height")}
                        error={errors.height}
                        touched={touched.height}
                      />

                      <CustomInput
                        style={styles.input}
                        label="Weight (kg)"
                        placeholder="Enter weight"
                        keyboardType="numeric"
                        value={values.weight}
                        onChangeText={handleChange("weight")}
                        onBlur={handleBlur("weight")}
                        error={errors.weight}
                        touched={touched.weight}
                      />

                      <CustomInput
                        style={styles.input}
                        label="City of Birth"
                        placeholder="Enter city of Birth"
                        value={values.cityOfBirth}
                        onChangeText={handleChange("cityOfBirth")}
                        onBlur={handleBlur("cityOfBirth")}
                        error={errors.cityOfBirth}
                        touched={touched.cityOfBirth}
                      />

                      <CustomInput
                        label="Short description"
                        multiline={true}
                        placeholder={
                          values.recipient === "self"
                            ? "Describe yourself"
                            : values.recipient === "family"
                            ? `Describe your ${values.familyMember}`
                            : values.recipient === "friend"
                            ? "Describe your friend"
                            : ""
                        }
                        value={values.description}
                        onChangeText={handleChange("description")}
                        onBlur={handleBlur("description")}
                        error={errors.description}
                        touched={touched.description}
                      />
                    </>
                  )}

                  <CustomDropdown
                    label="Zodiac Sign"
                    value={values.zodiacSign}
                    options={zodiacSigns.map((sign) => ({
                      label: sign,
                      value: sign.toLowerCase(),
                    }))}
                    onSelect={(val) => setFieldValue("zodiacSign", val)}
                    error={errors.zodiacSign}
                    touched={touched.zodiacSign}
                  />

                  <View style={styles.buttonWrapper}>
                    <CustomButton title="Generate" onPress={handleSubmit} />
                  </View>

                  <TouchableOpacity
                    style={styles.mockButton}
                    onPress={() => {
                      setFieldValue("recipient", "self");
                      setFieldValue("familyMember", "");
                      setFieldValue("name", "Eren Yeager");
                      setFieldValue("zodiacSign", "Pisces");
                      setFieldValue("gender", "male");
                      setFieldValue("height", "183");
                      setFieldValue("weight", "75");
                      setFieldValue("cityOfBirth", "Shiganshina");
                      setFieldValue(
                        "description",
                        "Determined and intense, driven by a desire for freedom and justice."
                      );
                      setFieldValue(
                        "dateTimeOfBirth",
                        new Date("835-03-30T12:00:00")
                      );
                    }}
                  >
                    <Text style={styles.mockButtonText}>
                      Fill with Mock Data
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            );
          }}
        </Formik>
      )}
    </>
  );
}

export default CreateSongScreen;
