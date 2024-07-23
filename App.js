import React, { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

import GameScreen from './screens/GameScreen'; 

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber) ;
  }

  const screen = userNumber ? <GameScreen userChoice={userNumber}/> : <StartGameScreen onStartGame={startGameHandler}/>
  return (
    <ImageBackground style={styles.screen} source={require('./assets/images/bg.jpg')} resizeMode="cover">
      <LinearGradient style={styles.innerScreen} colors={['transparent', 'transparent', 'transparent', 'transparent', 'rgba(0,0,0,0.5)']}>
        <SafeAreaView style={styles.screen}>
          {screen}
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  innerScreen: {
    width: '100%',
    height: '100%',
  }
});