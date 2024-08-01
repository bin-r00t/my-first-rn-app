import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Color from "./constants/color";
import { useState } from "react";

export default function App() {
  const [enteredText, setEnteredText] = useState();
  const [goals, setGoals] = useState([]);

  function handleInput(enteredText) {
    setEnteredText(enteredText);
  }
  function handleClick() {
    setGoals((old) => {
      return [...old, { value: enteredText, id: Math.random().toString() }];
    });
    setEnteredText("");
    // Alert.alert("I'm an alert", enteredText ?? "Hello world!");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={handleInput}
          value={enteredText}
        />
        <Button title="Add Goal" onPress={handleClick} />
      </View>
      <View style={styles.mainBody}>
        {/* alwaysBounceVertical 这类 prop 需要参考官网 Components API  */}
        <FlatList
          style={styles.scrollArea}
          alwaysBounceVertical={false}
          data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(goal) => (
            <View style={styles.rounded}>
              <Text style={styles.goalItem}>{goal.item.value}</Text>
            </View>
          )}
        />
        {/* <ScrollView style={styles.scrollArea} alwaysBounceVertical={false}>
          {goals.map((goal, index) => (
            <View key={index} style={styles.rounded}>
              <Text style={styles.goalItem}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inputArea: {
    padding: 12,
    paddingTop: 56,
    backgroundColor: Color.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  input: {
    borderWidth: 1,
    color: "#fff",
    borderColor: Color.second,
    paddingHorizontal: 8,
    flex: 1,
  },
  mainBody: {
    flex: 1,
  },
  scrollArea: {
    padding: 12,
    gap: 12,
  },
  rounded: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: Color.gray,
    padding: 12,
    overflow: "hidden",
    elevation: 4,
  },
  goalItem: {
    fontSize: 18,
    color: "#777",
  },
  button: {
    width: 400,
    backgroundColor: "#f00",
  },
});
