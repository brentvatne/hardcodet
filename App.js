import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const getKitten = async () => {
    const result = await fetch("https://placekitten.com/300/300");
    alert("result: " + result.status);
  };

  return (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: "https://placekitten.com/300/300" }}
        resizeMode={"cover"}
      />
      <Button onPress={() => getKitten()} title={"get kitten"} />
    </View>
  );
}
