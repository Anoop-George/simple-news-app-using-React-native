import React from "react";
import { View, Text, Image } from "react-native";

const Read = ({ navigation, route }) => {
  let item = route.params.item;

  return (
    <View>
      <Text>Title: {item.title}</Text>
      <Text>{item.description}</Text>
      <Image
        style={{ width: 350, height: 300 }}
        source={{
          uri: `${item.urlToImage}`,
        }}
      />
    </View>
  );
};

export default Read;
