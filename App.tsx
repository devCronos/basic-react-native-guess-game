import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components";
import { StartGameScreen, GameScreen } from "./screens";
import { GameOver } from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [rounds, setRounds] = useState(0);
  const configureNewGame = () => {
    setRounds(0);
    setUserNumber(null);
  };
  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };
  const gameOverHandler = (rnds: number) => {
    setRounds(rnds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && rounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (rounds > 0) {
    content = (
      <GameOver
        userNumber={userNumber!}
        roundsNumber={rounds}
        onRestart={configureNewGame}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// 22
// sudo ~/Library/Android/sdk/emulator/emulator -avd Pixel_3_API_28
