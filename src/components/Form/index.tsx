import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import ResultIMC from "./ResultIMC";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura!");
  const [imc, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setIMC((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageIMC("Seu IMC é igual: ");
      setTextButton("Calcular novamente");
      return;
    }
    setIMC(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e a altura!");
  }

  return (
    <View>
      <View>
        <Text>Altura:</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Coloque sua altura. Ex: 1,75"
          keyboardType="numeric"
        />
        <Text>Peso:</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Coloque seu peso. Ex: 80"
          keyboardType="numeric"
        />

        <Button onPress={() => validationImc()} title={textButton} />
      </View>
      <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
      <View></View>
      <View></View>
    </View>
  );
}
