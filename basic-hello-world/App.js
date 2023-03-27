import {StatusBar} from 'expo-status-bar';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

/*export default function App() {

  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Enter your Name:</Text>
      </View>
      <TextInput
        placeholder="Karli"
        onChangeText={(value) => setName(value)}
      ></TextInput>
      <Text>Hi {name}</Text>
    </View>
  );
}*/

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Karl', key: '1'},
    {name: 'Alex', key: '2'},
    {name: 'John', key: '3'},
    {name: 'Jane', key: '4'},
    {name: 'Jill', key: '5'},
    {name: 'Bob', key: '6'},
    {name: 'Sara', key: '7'},
    {name: 'Tim', key: '8'},
    {name: 'Tom', key: '9'},
  ]);

  const pressHandler = (key) => {
    setPeople(prevState => {
      return prevState.filter(person => person.key != key);
    });
  }

  return (
    <View style={styles.container}>
      <FlatList data={people} renderItem={(item) => (
        <TouchableOpacity
          onPress={() => pressHandler(item.item.key)}>
          <Text style={styles.item}>{item.item.name}</Text>
        </TouchableOpacity>
      )}/>
      {/*<ScrollView>
        <View style={styles.container}>
          {people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 20,
    borderRadius: 10,
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonView: {
    marginTop: 20,
  }
});
