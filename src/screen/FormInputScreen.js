import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    padding: 10,
  },
  input: {
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 10,
    height: 100,
    padding: 15,
  },
  elevation: {
    elevation: 6,
    shadowColor: "#6e6e6e",
  },
  button: {
    backgroundColor: "#4896f7",
    borderRadius: 50,
    height: 50,
    width: "100%",
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
  const [text, setText] = useState("");
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={[styles.input, styles.elevation]}
        onChangeText={setText}
        value={text}
        multiline={true}
        numberOfLines={5}
      />
      <Text>{text}</Text>
      <Pressable onPress={() => alert("asd")} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};
