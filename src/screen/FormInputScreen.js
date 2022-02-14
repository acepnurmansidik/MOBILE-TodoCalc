import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { setCreateToDoList } from "../../services/todolist";

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
    display: "flex",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 10,
    height: 100,
    padding: 15,
    width: "94%",
    marginBottom: 40,
  },
  elevation: {
    elevation: 6,
    shadowColor: "#6e6e6e",
  },
  button: {
    backgroundColor: "#4896f7",
    borderRadius: 50,
    height: 50,
    width: "95%",
  },
  buttonText: {
    textAlign: "center",
    lineHeight: 50,
    fontSize: 18,
    color: "#FFF",
    fontWeight: "800",
  },
});
export default FormInputScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");

  const handleOnSubmit = async () => {
    if (!title.length) {
      return alert("Field is required!");
    }
    let data = {
      title,
    };
    await setCreateToDoList(data);
    navigation.navigate("To Do List");
  };
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={[styles.input, styles.elevation]}
        value={title}
        onChangeText={(value) => setTitle(value)}
        multiline={true}
        numberOfLines={5}
      />
      <TouchableOpacity onPress={handleOnSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
