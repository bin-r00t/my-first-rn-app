import { Pressable, StyleSheet, View, Text } from "react-native";
import Color from "../constants/color";

export default function GoalItem({ id, value, onClick }) {
  function handlePress() {
    console.log("handlePress");
    onClick(id);
  }
  return (
    <View style={styles.rounded}>
      <Pressable
        android_ripple={{ color: Color.gray }}
        onPress={handlePress}
        style={({ pressed }) => [{ padding: 8 }, pressed && styles.goalClicked]}
      >
        <Text style={styles.goalItem}>{value}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rounded: {
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: Color.lightgray,
    overflow: "hidden",
    // elevation: 4,
  },
  goalItem: {
    fontSize: 18,
    color: "#666",
  },
  goalClicked: {
    // opacity: 0.8,
    color: "#000",
  },
});
