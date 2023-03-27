import {Text, View} from "react-native";
import {globalStyles} from "../assets/styles/global-styles";


export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
    </View>
  )
}