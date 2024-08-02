import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function handleAddGoal(goal) {
    setGoals((old) => {
      return [...old, { value: goal, id: Math.random().toString() }];
    });
  }

  function handleDelete(id) {
    setGoals((old) => {
      return old.filter((item) => item.id !== id);
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <GoalInput onAddGoal={handleAddGoal} />
      <View style={styles.mainBody}>
        <GoalList goals={goals} onDelete={handleDelete} />
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
  mainBody: {
    flex: 1,
  },
});
