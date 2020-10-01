import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./homestack";
import Love from "../screens/love";

const Drawer = createDrawerNavigator();

export default function Appdrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
        <Drawer.Screen name="Love" component={Love} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
