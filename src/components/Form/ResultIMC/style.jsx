import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 10,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 28,
    color: "#000",
    fontWeight: "bold",
  },
  information: {
    fontSize: 18,
    color: "#ff0643",
    fontWeight: "bold",
  },
  boxShareBtn: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  share: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedTxt: {
    color:"#fff",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default styles;
