import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

const Home = ({ navigation }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=7a3be893787040d9be4019128f7ca3e1"
      )
      .then((res) => setNews(res.data.articles));
  }, []);
  return (
    <View>
      <Text>home</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <View style={{ margin: 3, padding: 2 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Read", { item: item });
                }}
              >
                <Text style={{ fontSize: 16 }}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;
