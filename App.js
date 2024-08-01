import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
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
      return [...old, enteredText];
    });
    Alert.alert("I'm an alert", enteredText ?? "Hello world!");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.inputArea}>
        <TextInput style={styles.input} onChangeText={handleInput} />
        <Button title="Add Goal" onPress={handleClick} />
      </View>
      <View style={styles.mainBody}>
        <Text
          style={{
            color: "#f00",
            borderWidth: 2,
            borderColor: "#0ff",
            padding: 24,
            margin: 12,
          }}
        >
          {enteredText}
        </Text>
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
    backgroundColor: "#e3e3e3",
  },
  button: {
    width: 400,
    backgroundColor: "#f00",
  },
});
