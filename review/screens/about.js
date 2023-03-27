import {Text, View} from "react-native";


export default function About() {
  return (
    <View style={style.container}>
      <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});