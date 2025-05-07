import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
// import { Icon } from "@iconify/react-native";

function CreateSong() {
  const [recipient, setRecipient] = useState("self");
  const [familyMember, setFamilyMember] = useState("");
  const [gender, setGender] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

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

  const handleDateChange = (event, selectedDate) => {
    setShowDate(false);
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Your Song</Text>
      </View>

      <Text style={styles.label}>Who is this song for?</Text>
      <View style={styles.radioGroup}>
        {["self", "family", "friend"].map((option) => (
          <TouchableOpacity key={option} onPress={() => setRecipient(option)}>
            <Text
              style={[
                styles.radio,
                recipient === option && styles.radioSelected,
              ]}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {recipient === "family" && (
        <>
          <Text style={styles.label}>Select Family Member</Text>
          <Picker
            selectedValue={familyMember}
            onValueChange={setFamilyMember}
            style={styles.picker}
          >
            <Picker.Item label="Choose family member" value="" />
            {familyMembers.map((member) => (
              <Picker.Item
                key={member.value}
                label={member.label}
                value={member.value}
              />
            ))}
          </Picker>
        </>
      )}

      {(recipient === "self" ||
        recipient === "friend" ||
        (recipient === "family" && familyMember)) && (
        <>
          <TextInput style={styles.input} placeholder="Name" />
          <TouchableOpacity onPress={() => setShowDate(true)}>
            <Text style={styles.dateText}>
              Date of Birth: {date.toDateString()}
            </Text>
          </TouchableOpacity>
          {showDate && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <Text style={styles.label}>Gender</Text>
          <View style={styles.radioGroup}>
            {["male", "female", "secret"].map((option) => (
              <TouchableOpacity key={option} onPress={() => setGender(option)}>
                <Text
                  style={[
                    styles.radio,
                    gender === option && styles.radioSelected,
                  ]}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.input}
            placeholder="Height (cm)"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
          />
          <TextInput style={styles.input} placeholder="City of Birth" />
          <TextInput
            style={[styles.input, { height: 100 }]}
            multiline
            placeholder={`Describe ${
              recipient === "self" ? "yourself" : "them"
            }`}
          />
        </>
      )}

      <Text style={styles.label}>Zodiac Sign</Text>
      <Picker
        selectedValue={zodiacSign}
        onValueChange={setZodiacSign}
        style={styles.picker}
      >
        <Picker.Item label="Select zodiac sign" value="" />
        {zodiacSigns.map((sign) => (
          <Picker.Item key={sign} label={sign} value={sign.toLowerCase()} />
        ))}
      </Picker>

      <TextInput style={styles.input} placeholder="Time of Birth" />
      <Text style={styles.label}>How do you feel today?</Text>
      <Picker style={styles.picker}>
        <Picker.Item label="Happy & Energetic" value="happy" />
        <Picker.Item label="Calm & Peaceful" value="calm" />
        <Picker.Item label="Romantic & Dreamy" value="romantic" />
        <Picker.Item label="Melancholic & Thoughtful" value="melancholic" />
        <Picker.Item label="Excited & Adventurous" value="excited" />
      </Picker>

      <View style={styles.buttonWrapper}>
        <Button title="Generate" onPress={() => {}} color="#007bff" />
      </View>
    </ScrollView>
  );
}

export default CreateSong;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: "600",
  },
  radioGroup: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
  },
  radio: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: "#007bff",
    color: "white",
    borderColor: "#007bff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
  },
  picker: {
    marginTop: 12,
  },
  dateText: {
    marginTop: 12,
    fontSize: 16,
    color: "#007bff",
  },
  buttonWrapper: {
    marginTop: 24,
  },
});
