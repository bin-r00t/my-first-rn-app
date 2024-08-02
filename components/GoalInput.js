import { Button, StyleSheet, TextInput, View } from "react-native";
import Color from "../constants/color";
import { useState } from "react";

export default function GoalInput({ onAddGoal }) {
  const [enteredText, setEnteredText] = useState();

  function handleInput(enteredText) {
    setEnteredText(enteredText);
  }
  function handleClick() {
    onAddGoal(enteredText);
    setEnteredText("");
  }

  return (
    <View style={styles.inputArea}>
      <TextInput
        style={styles.input}
        onChangeText={handleInput}
        value={enteredText}
      />
      <Button title="Add Goal" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
