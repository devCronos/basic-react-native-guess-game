import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components";
import { StartGameScreen } from "./screens";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//11
