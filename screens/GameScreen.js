import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guess" />
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>Log Roundc</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    paddingTop: 38,
  },
});
