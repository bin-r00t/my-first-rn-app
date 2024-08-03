import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import Color from "../constants/color";
import { useState } from "react";
import GoalModal from "./GoalModal";

export default function GoalInput({ onAddGoal }) {
  const [enteredText, setEnteredText] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function handleInput(enteredText) {
    setEnteredText(enteredText);
  }
  function handleClick() {
    onAddGoal(enteredText);
    setEnteredText("");
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleOpenModal() {
    setModalVisible(true);
  }

  function handleAdd(value) {
    onAddGoal(value);
  }

  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do App</Text>
      <View style={styles.addBtn}>
        <Pressable
          style={styles.pressable}
          android_ripple={{ color: "#0801" }}
          onPress={handleOpenModal}
        >
          <Text style={styles.addBtnTitle}>Add</Text>
        </Pressable>
      </View>

      <GoalModal
        visible={modalVisible}
        onAdd={handleAdd}
        onCancel={handleCloseModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 12,
    paddingTop: 40,
    backgroundColor: Color.primary,
    gap: 12,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    paddingHorizontal: 18,
  },
  pressable: {
    padding: 10,
  },
  addBtn: {
    width: "100%",
    backgroundColor: Color.second,
  },
  addBtnTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  inputArea: {
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
