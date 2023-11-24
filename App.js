import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [data, setData] = React.useState("");
  const [todo, setTodo] = React.useState([""]);
  const [data1, setData1] = React.useState({
    item1: "Item 1",
    item2: "Item 2",
    item3: "Item 3",
  });

  const add = (data) => {
    if (data == "") {
      setTodo([...todo]);
    } else {
      setTodo([...todo, data]);
    }
    setData("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20 }}>Only Add Text</Text>
        <TextInput
          style={{ height: 40, borderColor: "red", borderWidth: 1 }}
          placeholder="Enter Text"
          onChangeText={(text) => setData(text)}
          value={data}
        />

        <Button title="Add" onPress={() => add(data)} />
        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 20 }}>{`\u2043 ${item}`}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
