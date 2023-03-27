import {Text, View} from "react-native";
import {globalStyles} from "../assets/styles/global-styles";

export default function Card(props) {
  const {title, rating, body} = props;
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.title}>{title}</Text>
      <Text style={globalStyles.rating}>Rating: {rating}</Text>
      <Text style={globalStyles.body}>Description: {body}</Text>
    </View>
  );
}