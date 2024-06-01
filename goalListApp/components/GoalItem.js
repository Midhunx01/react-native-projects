import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <View style={styles.goalListView}>
      <Pressable
        onPress={onDelete.bind(this, item.id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalListText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalListView: {
    margin: 5,
    borderRadius: 12,
    backgroundColor: "blue",
  },
  goalListText: {
    padding: 16,
    color: "white",
  },
  pressed: {
    backgroundColor: "red",
    borderRadius: 12,
  },
});
