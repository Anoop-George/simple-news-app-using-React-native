import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Search from "../screens/search";

const Header = ({ navigation, title }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Entypo
          name="menu"
          size={24}
          color="red"
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={{ left: 20, flex: 3 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{title}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Search />
      </View>
    </View>
  );
};

export default Header;
