import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert, } from "react-native";
import { useRouter } from "expo-router";

export default function LobbyHost() {
  const router = useRouter();

  const maxPlayers = 4;

  const [players, setPlayers] = useState<string[]>([]);

  const [hostName, setHostName] = useState("");
  const [hostJoined, setHostJoined] = useState(false);

  const [newPlayerName, setNewPlayerName] = useState("");

  const confirmHost = () => {
    const name = hostName.trim();
    if (!name) return Alert.alert("Bitte Namen eingeben");
    const hostEntry = `${name} (Host)`;
    setPlayers([hostEntry]);
    setHostJoined(true);
    setHostName("");
  };

  const addPlayer = () => {
    const name = newPlayerName.trim();
    if (!name) return Alert.alert("Bitte Namen für neuen Pixler eingeben");
    if (players.length >= maxPlayers) return Alert.alert("Lobby ist voll");
    setPlayers(prev => [...prev, name]);
    setNewPlayerName("");
  };

  const startGame = () => {
    if (players.length < 2) {
      Alert.alert("Mindestens 2 Spieler benötigt");
      return;
    }
    router.push("./WordRevealForPixelingPlayer");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("./")}>
          <Text style={styles.leave}>◀ Verlassen</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Lobby</Text>

      {!hostJoined ? (
        <View style={styles.centerBox}>
          <TextInput
            placeholder="Dein Host-Name"
            value={hostName}
            onChangeText={setHostName}
            style={styles.input}
            returnKeyType="done"
          />
          <TouchableOpacity style={styles.primaryButton} onPress={confirmHost}>
            <Text style={styles.primaryButtonText}>Als Host beitreten</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.sub}>
            {players.length}/{maxPlayers} Pixler
          </Text>
          <Text style={styles.code}>#1414</Text>

          {/* Spieler-Liste */}
          <FlatList
            data={players}
            keyExtractor={(item, index) => `${item}-${index}`}
            style={styles.playerList}
            renderItem={({ item }) => (
              <View style={styles.playerRow}>
                <Text style={styles.playerText}>{item}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />

          {/* + Pixler: steht direkt unter der Liste */}
          {players.length < maxPlayers && (
            <View style={styles.addBox}>
              <TextInput
                placeholder="Name für neuen Pixler"
                value={newPlayerName}
                onChangeText={setNewPlayerName}
                style={styles.input}
                returnKeyType="done"
              />
              <TouchableOpacity style={styles.ghostButton} onPress={addPlayer}>
                <Text style={styles.ghostButtonText}>+ Pixler hinzufügen</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* START */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.startButton,
                players.length >= maxPlayers ? styles.startReady : styles.startNotReady,
              ]}
              onPress={startGame}
            >
              <Text style={styles.startButtonText}>
                {players.length >= maxPlayers
                  ? "Spiel starten"
                  : "Warte auf Pixler... trotzdem starten?"}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, alignItems: "center", backgroundColor: "#FAFAFA" },
  header: { width: "90%", alignItems: "flex-start" },
  leave: { color: "#357ABD", fontSize: 16 },

  title: { fontSize: 28, fontWeight: "700", marginTop: 6 },
  sub: { marginTop: 8, fontSize: 16 },
  code: { color: "#357ABD", fontSize: 18, marginBottom: 12 },

  centerBox: { width: "80%", marginTop: 20 },
  input: {
    width: "100%",
    backgroundColor: "#E6E6E6",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: "#357ABD",
    padding: 12,
    borderRadius: 10,
  },
  primaryButtonText: { color: "white", textAlign: "center", fontSize: 16 },

  playerList: { width: "85%", marginTop: 6, maxHeight: 300 },

  playerRow: {
    backgroundColor: "#E8F2FA",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  playerText: { fontSize: 18, textAlign: "left" },

  addBox: { width: "80%", marginTop: 12 },

  ghostButton: { paddingVertical: 10, alignItems: "center" },
  ghostButtonText: { color: "#357ABD", fontSize: 16 },

  footer: { width: "80%", marginTop: 12 },

  startButton: { padding: 14, borderRadius: 12 },
  startReady: { backgroundColor: "green" },
  startNotReady: { backgroundColor: "#999" },
  startButtonText: { color: "white", textAlign: "center", fontSize: 16 },
});
