import {View} from "react-native";
import {globalStyles} from "../assets/styles/global-styles";
import Card from "../components/card";

export default function ReviewDetail({navigation, route}) {

  const {title, rating, body} = route.params;

  return (
    <View style={globalStyles.container}>
      <Card title={title} rating={rating} body={body}/>
    </View>
  )
}