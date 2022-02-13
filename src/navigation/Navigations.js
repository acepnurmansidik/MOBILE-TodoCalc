import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ToDoListScreen from "../screen/ToDoListScreen";
import FormInputScreen from "../screen/FormInputScreen";

const Stack = createStackNavigator();

const ToDoFromStackGroup = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="To Do List Group" component={ToDoListScreen} />
      <Stack.Screen name="Home" component={FormInputScreen} />
    </Stack.Navigator>
  );
};

export { ToDoFromStackGroup };
