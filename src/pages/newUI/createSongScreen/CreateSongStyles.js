import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
    backgroundColor: "#FFF3E0",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
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
    justifyContent: "space-around",
    gap: 10,
    marginTop: 8,
    marginBottom: 16,
  },
  radio: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
    marginRight: 8,
  },
  radioSelected: {
    backgroundColor: "#FF9800",
    color: "white",
    borderColor: "#FF9800",
  },
  picker: {
    marginTop: 12,
  },
  dateLabel: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: "600",
  },
  dateText: {
    textAlign: "center",
    marginTop: -10,
    fontSize: 26,
    color: "#FF9800",
  },
  buttonWrapper: {
    marginTop: 24,
  },
});

// export default styles;
