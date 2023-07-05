import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultIMC,
    });
  };

  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageResultIMC}</Text>
      <Text style={styles.numberImc}>{props.resultIMC}</Text>
      <View style={styles.boxShareBtn}>
        <TouchableOpacity onPress={onShare} style={styles.share}>
          <Text style={styles.sharedTxt}>Partilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
