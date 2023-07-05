import { View, Text, TextInput, Button } from "react-native";

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura:</Text>
        <TextInput
          placeholder="Coloque sua altura. Ex: 1,75"
          keyboardType="numeric"
        />
        <Text>Peso:</Text>
        <TextInput
          placeholder="Coloque seu peso. Ex: 80"
          keyboardType="numeric"
        />

        <Button />
      </View>
      <View></View>
      <View></View>
    </View>
  );
}
