import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function GuessScreen(){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.contentContainer}>
        <Text style={styles.text}>
          Du bist dran mit{'\n'}Raten!
        </Text>

        {/* Neuer Erklärungstext */}
        <Text style={styles.descriptionText}>
          Deine Gegner malen ein bestimmtes Wort nach. Versuche dieses Wort zu erraten, bevor der Timer abläuft. Los geht's!
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000',
    lineHeight: 40,
  },

  descriptionText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    color: '#333',
    marginTop: "17.5%",
    lineHeight: 26,
  },
});