import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// screen
import HomeScreen from "./screen/HomeScreen";
import ToDoListScreen from "./screen/ToDoListScreen";
import CalculatorScreen from "./screen/CalculatorScreen";

// screen names
const homeName = "Home";
const todolistName = "To Do List";
let calculatorName = "Calculator";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === todolistName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === calculatorName) {
              iconName = focused ? "calculator" : "calculator-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={todolistName} component={ToDoListScreen} />
        <Tab.Screen name={calculatorName} component={CalculatorScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
