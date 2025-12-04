import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const GuessScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
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

    </SafeAreaView>
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
    justifyContent: 'center', // Zentriert den Text vertikal und horizontal
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000',
    lineHeight: 40,
  },
  // Style für den neuen Erklärungstext
  descriptionText: {
    fontSize: 20,
    fontWeight: '300', // Etwas leichter/dünner als die Überschrift
    textAlign: 'center',
    color: '#333', // Ein dunkles Grau sieht oft eleganter aus als reines Schwarz für Fließtext
    marginTop: "17.5%", // Abstand zur Überschrift
    lineHeight: 26, // Gute Lesbarkeit bei mehrzeiligem Text
  },
});

export default GuessScreen;