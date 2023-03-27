import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../assets/styles/global-styles";
import {useState} from "react";

export default function Home({navigation}) {

  const [reviews, setReviews] = useState([
    {title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "1"},
    {title: "Gotta Catch Them All (again)", rating: 4, body: "lorem ipsum", key: "2"},
    {title: "Not So 'Final' Fantasy", rating: 3, body: "lorem ipsum", key: "3"},
    {title: "The Legend of Zelda: Breath of the Wild", rating: 5, body: "lorem ipsum", key: "4"},
    {title: "Pokemon Orange", rating: 4, body: "lorem ipsum", key: "5"},
    {title: "Final Fantasy VII", rating: 3, body: "lorem ipsum", key: "6"},
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList data={reviews} renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
          <Text style={globalStyles.item}>{item.title}</Text>
        </TouchableOpacity>
      )}/>
    </View>
  )
}