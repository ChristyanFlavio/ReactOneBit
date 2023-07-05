import { View, Text } from "react-native";

export default function ResultIMC(props: any) {
  return (
    <View>
      <Text>{props.messageResultIMC}</Text>
      <Text>{props.resultIMC}</Text>
    </View>
  );
}
