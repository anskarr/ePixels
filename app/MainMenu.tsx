import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  StatusBar,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [lobbyCode, setLobbyCode] = useState("");

  const onPlay = () => {
    Alert.alert("Fehlender Name", `Spielername darf nicht leer sein!`);
  };

  const onCreateRoom = () => {
    Alert.alert("Raum erstellen", "Das ist aktuell nicht möglich!");
  };

  const onJoinRoom = () => {
    Alert.alert("Fehlender Code", `Lobby Code darf nicht leer sein!`);
  };

  const onBurger = () => {
    Alert.alert("Optionen", "Herzlichen Glühstrumpf, du hast einen Knopf gedrückt.");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      {/* Top line + burger */}
      <View style={styles.topRow}>
        <TouchableOpacity
          onPress={onBurger}
          accessibilityLabel="Burger Menü"
          style={styles.burgerTouchable}
        >
          {/* Drei horizontale Striche */}
          <View style={styles.burgerLine} />
          <View style={[styles.burgerLine, { marginTop: 6 }]} />
          <View style={[styles.burgerLine, { marginTop: 6 }]} />
        </TouchableOpacity>
      </View>

      {/* Logo / Titel */}
      <View style={styles.header}>
        <Text style={styles.logo}>epiXels</Text>
      </View>

      <View style={styles.content}>
        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Namen eingeben"
          placeholderTextColor="#222"
          value={name}
          onChangeText={setName}
          accessibilityLabel="Namen eingeben"
          returnKeyType="done"
        />

        {/* PLAY button (grün) */}
        <TouchableOpacity
          style={styles.playButton}
          onPress={onPlay}
          accessibilityRole="button"
          accessibilityLabel="Play"
        >
          <Text style={styles.playText}>Zufälliges Spiel</Text>
        </TouchableOpacity>

        {/* Privaten Raum erstellen (blau) */}
        <TouchableOpacity
          style={styles.blueButton}
          onPress={onCreateRoom}
          accessibilityRole="button"
          accessibilityLabel="Privaten Raum erstellen"
        >
          <Text style={styles.blueButtonText}>Privaten Raum erstellen</Text>
        </TouchableOpacity>

        {/* Lobby Code Label + Input */}
        <View style={styles.lobbyRow}>
          <Text style={styles.hash}>#</Text>
          <TextInput
            style={[styles.input, styles.lobbyInput]}
            placeholder="Lobby Code"
            placeholderTextColor="#222"
            value={lobbyCode}
            onChangeText={setLobbyCode}
            accessibilityLabel="Lobby Code"
            returnKeyType="done"
            autoCapitalize="none"
          />
        </View>

        {/* Privaten Raum beitreten (blau) */}
        <TouchableOpacity
          style={styles.blueButton}
          onPress={onJoinRoom}
          accessibilityRole="button"
          accessibilityLabel="Privaten Raum beitreten"
        >
          <Text style={styles.blueButtonText}>Privatem Raum beitreten</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "9%",
  },
  topRow: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  topLine: {
    flex: 1,
    height: 3,
    backgroundColor: "#2fa6e6", // dünne blaue Linie oben
    alignSelf: "flex-start",
    marginTop: 6,
    borderRadius: 2,
  },
  burgerTouchable: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  burgerLine: {
    width: 24,
    height: 3,
    backgroundColor: "#111",
    borderRadius: 2,
  },

  header: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 18,
  },
  logo: {
    fontSize: 72,
    fontWeight: "300",
    marginVertical: "4%",
    letterSpacing: 2,
    color: "#000",
  },

  content: {
    alignItems: "center",
    textAlignVertical: "center",
    paddingHorizontal: 28,
  },

  input: {
    width: Math.min(width - 80, 360),
    height: 40,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#000",
    paddingHorizontal: 12,
    marginVertical: 6,
    textAlign: "center",
    fontSize: 18,
  },

  playButton: {
    width: Math.min(width - 80, 360),
    height: 74,
    backgroundColor: "#26b33b", // grün
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    // leichter Schatten (iOS/Android)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
  },
  playText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 2,
  },

  blueButton: {
    width: Math.min(width - 80, 360),
    minWidth: 180,
    height: 40,
    backgroundColor: "#1aa0c4", // blau
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "29%",
    paddingHorizontal: 10,
  },
  blueButtonText: {
    fontSize: 18,
    color: "#00343a",
    textAlign: "center",
  },

  lobbyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "12%",
    marginBottom: "5.5%",
  },
  hash: {
    fontSize: 16,
    marginRight: 8,
    color: "#222",
  },
  lobbyInput: {
    textAlign: "center",
    width: 200,
  },
});
