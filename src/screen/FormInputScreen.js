import * as React from "react";
import { View, Text } from "react-native";

export default FormInputScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert("This is home screen")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Form Scren
      </Text>
    </View>
  );
};