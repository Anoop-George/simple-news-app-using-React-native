import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HeaderComponent from "./header";
import Read from "../screens/read";

const Stack = createStackNavigator();

const HomeNavigator = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerTitle: () => (
          <HeaderComponent navigation={navigation} title="All books" />
        ),
      }}
      name="Home"
      component={Home}
    />
    <Stack.Screen
      options={{
        title: "Read",
      }}
      name="Read"
      component={Read}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
