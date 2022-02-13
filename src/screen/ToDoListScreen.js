import * as React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
export default ToDoListScreen = ({ navigation }) => {
  const activity = [
    { id: 1, status: "pending", title: "do task 1" },
    { id: 2, status: "pending", title: "do task 2" },
    { id: 3, status: "pending", title: "do task 3" },
    { id: 4, status: "pending", title: "do task 4" },
    { id: 5, status: "pending", title: "do task 5" },
    { id: 6, status: "pending", title: "do task 6" },
    { id: 7, status: "pending", title: "do task 7" },
    { id: 8, status: "pending", title: "do task 8" },
    { id: 9, status: "pending", title: "do task 9" },
    { id: 9, status: "pending", title: "do task 9" },
    { id: 9, status: "pending", title: "do task 9" },
    { id: 9, status: "pending", title: "do task 9" },
  ];
  return (
    <SafeAreaView
      style={{
        marginTop: 10,
        position: "relative",
      }}
    >
      <StatusBar hidden={true} />
      <View style={{ bottom: 30 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#3684f7",
            padding: 5,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            position: "absolute",
            zIndex: 2,
            right: 10,
            top: 30,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 30, color: "#FFF" }}>+</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView style={{ marginTop: 2 }}>
        {activity.map((act) => (
          <ListItemPending act={act} />
        ))}
      </ScrollView> */}
    </SafeAreaView>
  );
};
