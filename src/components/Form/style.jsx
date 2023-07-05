import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 10,
    paddingTop: 30,
    borderRadius: 35,
  },
  form: {
    width: "100%",
    height: "auto",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0643",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  txtbuttonCalculator: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "100%",
    height: "50%",
  },
  listImcs: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 30,
    color: "#e40303",
    height: 50,
    width: "100%",
  },
  txtResultItemList: {
    fontSize: 16,
    color: "#000",
  },
});

export default styles;
