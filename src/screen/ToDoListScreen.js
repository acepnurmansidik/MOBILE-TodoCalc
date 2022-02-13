import * as React from "react";
import { Button, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 25,
    height: 60,
  },
  itemListSuccess: {
    backgroundColor: "#4aff7a",
    margin: 10,
    borderRadius: 25,
    height: 60,
  },
  elevation: {
    elevation: 6,
    shadowColor: "#6e6e6e",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  itemTitle: {
    width: "75%",
    height: "100%",
    lineHeight: 50,
  },
  itemBtn: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonItem: {
    margin: 5,
  },
});

export default ToDoListScreen = ({ navigation }) => {
  const activity = [
    { id: 1, status: "pending", title: "do task 1" },
    { id: 2, status: "pending", title: "do task 2" },
    { id: 3, status: "pending", title: "do task 3" },
    { id: 4, status: "success", title: "do task 4" },
    { id: 5, status: "pending", title: "do task 5" },
    { id: 6, status: "pending", title: "do task 6" },
    { id: 7, status: "pending", title: "do task 7" },
    { id: 8, status: "pending", title: "do task 8" },
    { id: 9, status: "pending", title: "do task 9" },
    { id: 10, status: "success", title: "do task 10" },
    { id: 11, status: "pending", title: "do task 11" },
    { id: 12, status: "pending", title: "do task 12" },
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
      <ScrollView>
        {activity.map((act, idx) =>
          act.status == "pending" ? (
            <ListPending act={act} />
          ) : (
            <ListResolve act={act} />
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const ListPending = ({ act }) => {
  return (
    <View key={act.id} style={[styles.itemList, styles.elevation]}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{act.title}</Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => alert("asd")} style={styles.buttonItem}>
            <Ionicons name={"checkmark-circle"} size={25} color={"#00e63d"} />
          </Pressable>
          <Pressable onPress={() => alert("asd")} style={styles.buttonItem}>
            <Ionicons name={"trash"} size={25} color={"red"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const ListResolve = ({ act }) => {
  return (
    <View key={act.id} style={[styles.itemListSuccess, styles.elevation]}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{act.title}</Text>
      </View>
    </View>
  );
};
