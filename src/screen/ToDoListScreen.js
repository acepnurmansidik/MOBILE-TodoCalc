import React, { useState, useEffect } from "react";
import { Button, StatusBar, FlatList } from "react-native";
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
import { getToDoList } from "../../services/todolist";

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 25,
    height: 60,
  },
  itemListSuccess: {
    backgroundColor: "#a1ff91",
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
    width: "70%",
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
    margin: 1,
  },
});

export default ToDoListScreen = ({ navigation }) => {
  const [dataTDL, setDataTDL] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    getDataTDL();
  }, []);

  const getDataTDL = async () => {
    const response = await getToDoList();
    setDataTDL(response.data);
    setIsLoading(false);
  };

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
            right: 4,
            top: 21,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 30, color: "#FFF" }}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ marginTop: 10 }}>
        <FlatList
          data={dataTDL}
          renderItem={_CheckStatus}
          keyExtractor={(item) => item._id.toString()}
          refreshing={isLoading}
          onRefresh={getDataTDL}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const _CheckStatus = ({ item }) => {
  return item.status == "pending" ? (
    <ListPending key={item._id} item={item} />
  ) : (
    <ListResolve key={item._id} item={item} />
  );
};

const ListPending = ({ item }) => {
  return (
    <View style={[styles.itemList, styles.elevation]}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => alert("done")} style={styles.buttonItem}>
            <Ionicons name={"checkmark-circle"} size={25} color={"#00e63d"} />
          </Pressable>
          <Pressable onPress={() => alert("edit")} style={styles.buttonItem}>
            <Ionicons name={"create"} size={25} color={"#ffcc00"} />
          </Pressable>
          <Pressable onPress={() => alert("delete")} style={styles.buttonItem}>
            <Ionicons name={"trash"} size={25} color={"red"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const ListResolve = ({ item }) => {
  return (
    <View style={[styles.itemListSuccess, styles.elevation]}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => alert("done")} style={styles.buttonItem}>
            <Ionicons name={"close-circle"} size={25} color={"red"} />
          </Pressable>
          <Pressable onPress={() => alert("edit")} style={styles.buttonItem}>
            <Ionicons name={"create"} size={25} color={"#ffcc00"} />
          </Pressable>
          <Pressable onPress={() => alert("delete")} style={styles.buttonItem}>
            <Ionicons name={"trash"} size={25} color={"red"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
