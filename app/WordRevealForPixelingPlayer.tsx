import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Typen für die Props (falls du diese Screen-Komponente von woanders aufrufst)
interface DrawScreenProps {
  wordToDraw: string;
  partnerName: string;
}

const DrawScreen: React.FC<DrawScreenProps> = ({
  wordToDraw = "Apfel",    // Standardwert: Variable für das Wort
  partnerName = "Frederick" // Standardwert: Variable für den Namen
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      {/* Oberer Bereich: Du bist dran */}
      <View style={styles.section}>
        <Text style={styles.titleText}>
          Versuche, das Wort{'\n'} mit Pixeln darzustellen!
        </Text>
      </View>

      {/* Mittlerer Bereich: Das Wort */}
      <View style={styles.section}>
        <Text style={styles.labelText}>
          Das Wort lautet:
        </Text>
        <Text style={styles.wordText}>
          {wordToDraw}
        </Text>
      </View>

      {/* Unterer Bereich: Partner */}
      <View style={styles.section}>
        <Text style={styles.labelText}>
          Du malst{'\n'}zusammen mit:
        </Text>
        <View style={styles.nameBadge}>
          <Text style={styles.nameText}>
            {partnerName}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly', // Verteilt die Elemente gleichmäßig vertikal
    paddingHorizontal: 20,
  },
  section: {
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000',
    lineHeight: 40, // Für besseren Abstand bei Zeilenumbruch
  },
  labelText: {
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  wordText: {
    fontSize: 36,
    fontWeight: '500',
    color: '#2b9bb8', // Blau-Ton ähnlich dem Screenshot (Apfel)
    textAlign: 'center',
  },
  nameBadge: {
    backgroundColor: '#a3c9d3', // Hellblauer Hintergrund (Frederick)
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25, // Rundung für den "Pill"-Look
    marginTop: 10,
    minWidth: 200, // Mindestbreite damit es gut aussieht
    alignItems: 'center',
  },
  nameText: {
    fontSize: 28,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
  },
});

export default DrawScreen;