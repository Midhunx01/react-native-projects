import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalButtonHandler = (enteredGoal) => {
    if (enteredGoal.trim().length !== 0) {
      setGoals((prevGoals) => [
        ...prevGoals,
        { text: enteredGoal, id: uuidv4() },
      ]);
      setIsModalVisible(false);
    } else {
      console.log("goal input cannot be empty!");
    }
  };

  const goalDeleteHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={() => setIsModalVisible(true)} />
      <GoalInput
        onAddGoal={addGoalButtonHandler}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <View style={styles.goalListContainer}>
        <FlatList
          data={goals}
          renderItem={(goalData) => {
            return (
              <GoalItem item={goalData.item} onDelete={goalDeleteHandler} />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: "#1e085a",
  },
  goalListContainer: {
    flex: 5,
    marginTop: 16,
  },
});
