// import React, { useState } from "react";
// import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import PropTypes from "prop-types";

// const formatDate = (date) => {
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();
//   return `${day}.${month}.${year}`;
// };

// const DateInputField = ({
//   placeholder,
//   value,
//   onChange,
//   //   onBlur,
//   touched,
//   error,
// }) => {
//   const [showPicker, setShowPicker] = useState(false);

//   const handleChange = (event, selectedDate) => {
//     setShowPicker(false);
//     if (selectedDate) {
//       onChange(formatDate(selectedDate));
//     }
//   };

//   return (
//     <View style={styles.inputContainer}>
//       <Pressable onPress={() => setShowPicker(true)}>
//         <TextInput
//           style={[
//             styles.input,
//             {
//               borderColor: touched && error ? "rgba(227, 0, 0, 1)" : "#FFD700",
//               backgroundColor:
//                 touched && error ? "rgba(227, 0, 0, 0.1)" : "transparent",
//             },
//           ]}
//           placeholder={placeholder}
//           value={value}
//           editable={false}
//           pointerEvents="none"
//         />
//       </Pressable>
//       {showPicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="spinner" // Можно "default", "calendar" и "spinner"
//           onChange={handleChange}
//           maximumDate={new Date()} // чтобы нельзя было выбрать дату в будущем
//         />
//       )}
//       {touched && error && <Text style={styles.error}>{error}</Text>}
//     </View>
//   );
// };

// DateInputField.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onBlur: PropTypes.func,
//   touched: PropTypes.bool,
//   error: PropTypes.string,
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     width: "100%",
//     marginBottom: 12,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderWidth: 1,
//     borderRadius: 4,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     fontFamily: "Indie Flower",
//   },
//   error: {
//     color: "red",
//     fontSize: 14,
//     marginTop: 5,
//     alignSelf: "flex-start",
//   },
// });

// export default DateInputField;

import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import PropTypes from "prop-types";

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const DateInputField = ({ placeholder, value, onChange, touched, error }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      onChange(formatDate(selectedDate));
    }
  };

  // Функции для получения стилей, аналогичные обычному инпуту
  const getBorderColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 1)"; // красная обводка при ошибке
    } else {
      return "rgba(17, 17, 19, 0.2)"; // светлая обводка по умолчанию
    }
  };

  const getBackgroundColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 0.1)"; // красный фон при ошибке
    } else {
      return "transparent"; // прозрачный фон по умолчанию
    }
  };

  const getTextColor = () => {
    if (touched && error) {
      return "rgba(227, 0, 0, 1)"; // красный текст при ошибке
    } else {
      return "rgba(29, 29, 29, 0.66)"; // стандартный цвет текста
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={() => setShowPicker(true)}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: getBorderColor(),
              backgroundColor: getBackgroundColor(),
              color: getTextColor(),
            },
          ]}
          placeholder={placeholder}
          value={value}
          editable={false}
          pointerEvents="none"
        />
      </Pressable>
      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="spinner" // Можно "default", "calendar" и "spinner"
          onChange={handleChange}
          maximumDate={new Date()} // чтобы нельзя было выбрать дату в будущем
        />
      )}
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

DateInputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 12,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
    fontSize: 14,
    fontFamily: "Indie Flower",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
    alignSelf: "flex-start",
  },
});

export default DateInputField;
