import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
} from "react-native";
import Color from "../constants/color";
import { useState } from "react";

export default function GoalModal({ visible, onCancel, onAdd }) {
  const [enteredText, setEnteredText] = useState();

  function handleInput(enteredText) {
    setEnteredText(enteredText);
  }

  function handleAdd() {
    onAdd(enteredText);
    setEnteredText("");
    onCancel();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={handleInput}
          value={enteredText}
        />
        <Button title="Add Goal" onPress={handleAdd} color={"#234aac"} />
        <Button title="Cancel" onPress={onCancel} color={"#90234d"} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    backgroundColor: Color.primary,
    justifyContent: "center",
    gap: 12,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    color: "#fff",
    borderColor: Color.second,
    padding: 16,
    paddingHorizontal: 8,
  },
});
