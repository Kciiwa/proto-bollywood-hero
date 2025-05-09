// import React from "react";
// import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
// import PropTypes from "prop-types";

// const Button = ({ onPress, text, color, icon, style }) => {
//   const buttonColorStyle =
//     color === "black" ? styles.buttonBlack : styles.buttonRed;

//   return (
//     <TouchableOpacity
//       style={[styles.button, buttonColorStyle, style]}
//       onPress={onPress}
//     >
//       <View style={styles.content}>
//         {icon && <Image source={{ uri: icon }} style={styles.icon} />}
//         <Text style={styles.buttonText}>{text}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// Button.propTypes = {
//   onPress: PropTypes.func.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   icon: PropTypes.string,
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

// const styles = StyleSheet.create({
//   button: {
//     width: "100%",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 4,
//   },
//   buttonBlack: {
//     backgroundColor: "rgb(29, 29, 29)",
//   },
//   buttonRed: {
//     backgroundColor: "rgba(215, 80, 63, 1)",
//   },
//   content: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     marginRight: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
// });

// export default Button;

import PropTypes from "prop-types";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress, style = {}, textStyle = {} }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 14,
    marginBottom: 12,
    gap: 8,
    height: 50,
    backgroundColor: "#FF9800",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default CustomButton;
