import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// screen
import CalculatorScreen from "./screen/CalculatorScreen";
import { ToDoFromStackGroup } from "./navigation/Navigations";

// screen names
const todolistName = "To Do List";
let calculatorName = "Calculator";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={calculatorName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === todolistName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === calculatorName) {
              iconName = focused ? "calculator" : "calculator-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={calculatorName} component={CalculatorScreen} />
        <Tab.Screen name={todolistName} component={ToDoFromStackGroup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
