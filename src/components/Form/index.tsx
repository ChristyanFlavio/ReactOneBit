import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";

import ResultIMC from "./ResultIMC";

import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura!");
  const [imc, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    setIMC(totalImc);
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório *");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageIMC("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
    } else {
      verificationImc();
      setIMC(null);
      setTextButton("Calcular");
      setMessageIMC("Preencha o peso e a altura!");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Coloque sua altura. Ex: 1,75"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Coloque seu peso. Ex: 80"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.txtbuttonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
          <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
          >
            <Text style={styles.txtbuttonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.txtResultItemList}>Resultado IMC = {item.imc}</Text>
            </Text>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
}
