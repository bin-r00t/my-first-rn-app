import { StyleSheet, FlatList } from "react-native";
import GoalItem from "./GoalItem";

export default function GoalList({ goals, onDelete }) {
  function handleDeleteItem(id) {
    console.log("deleting id: ", id);
    onDelete(id);
  }
  return (
    //  alwaysBounceVertical 这类 prop 需要参考官网 Components API
    <FlatList
      style={styles.scrollArea}
      alwaysBounceVertical={false}
      data={goals}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      renderItem={(goal) => (
        <GoalItem
          value={goal.item.value}
          onClick={handleDeleteItem.bind(this, goal.item.id)}
        />
      )}
    />
    /* <ScrollView style={styles.scrollArea} alwaysBounceVertical={false}>
          {goals.map((goal, index) => (
            <View key={index} style={styles.rounded}>
              <Text style={styles.goalItem}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */
  );
}

const styles = StyleSheet.create({
  scrollArea: {
    padding: 12,
    gap: 12,
  },
});
