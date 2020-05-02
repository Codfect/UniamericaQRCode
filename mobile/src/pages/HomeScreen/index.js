import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function HomeScreen() {
  return (
    <View style={homescreen.container}>
      <Text>Bem vindo!</Text>
    </View>
  );
}

const homescreen = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});
