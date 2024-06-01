import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, isModalVisible, setIsModalVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalButtonHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your goal"
          value={enteredGoal}
          onChangeText={(enteredText) => setEnteredGoal(enteredText)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <Button
              title="Cancel"
              color="white"
              onPress={() => setIsModalVisible(false)}
            />
          </View>
          <View style={styles.addGoalButton}>
            <Button
              title="Add Goal"
              color="white"
              onPress={addGoalButtonHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  textInputStyle: {
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
  },
  cancelButton: {
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 3,
    borderRadius: 8,
    backgroundColor: "red",
    width: "40%",
  },
  image: {
    height: 200,
    width: 200,
    margin: 15,
  },
  addGoalButton: {
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 3,
    borderRadius: 8,
    backgroundColor: "green",
    width: "40%",
  },
});
