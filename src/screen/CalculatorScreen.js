import * as React from "react";
import { View, Text, StatusBar } from "react-native";

export default CalculatorScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar hidden />
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Home Scren
      </Text>
    </View>
  );
};
