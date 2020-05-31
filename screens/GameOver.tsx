import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NumberContainer from "../components/NumberContainer";

type GameOverProps = {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
};

export const GameOver = (props: GameOverProps) => {
  return (
    <View style={styles.screen}>
      <Text>Game over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>The number was: {props.userNumber}</Text>
      <Button title="PLAY AGAIN" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
