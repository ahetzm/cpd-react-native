import {View, TextInput} from "react-native";
import {useState} from "react";

export default function AddTodo({addHandler}) {

  const [value, setValue] = useState('');

  const handleInputChange = (value) => {
    setValue(value);
  }

  const handleSubmit = (value) => {
    addHandler(value);
    setValue('');
  }

  return (
    <View>
      <TextInput
        style={style.newTodo}
        value={value}
        onChangeText={handleInputChange}
        placeholder='New ToDo...'
        onSubmitEditing={() => handleSubmit(value)}
      />
    </View>
  );
}

const style = {
  newTodo: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
}