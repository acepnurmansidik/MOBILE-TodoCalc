import * as React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

export default function ToDoListScreen({ navigation }) {
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
            right: 20,
          }}
          onPress={() => alert("Form")}
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
}

function ListItemPending({ act }) {
  return (
    <View
      key={act.id}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <NeuView
        color="#eef2f9"
        height={60}
        width={350}
        borderRadius={16}
        style={{ margin: 10 }}
        inset
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            margin: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1.5 }}>{act.title}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <NeuButton
              color="#eef2f9"
              width={40}
              height={40}
              borderRadius={10}
              style={{ marginRight: 10 }}
            >
              <Text>Done</Text>
            </NeuButton>
            <NeuButton color="#eef2f9" width={40} height={40} borderRadius={10}>
              <Text>Delete</Text>
            </NeuButton>
          </View>
        </View>
      </NeuView>
    </View>
  );
}
