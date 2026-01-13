import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";

type FinishProps = {
  navigation: any;
};

const guessedPlayers = ["Paul", "Tristan"];
const fastestPlayer = "Tristan";

const { width } = Dimensions.get("window");

export default function Finish({ navigation }: FinishProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const confettiAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.timing(confettiAnim, {
          toValue: 600,
          duration: 2500,
          useNativeDriver: true,
        })
      ),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* 🎉 Confetti */}
      <Animated.View
        style={[
          styles.confettiContainer,
          { transform: [{ translateY: confettiAnim }] },
        ]}
        pointerEvents="none"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <Text key={i} style={styles.confetti}>
            🎉🎉🎉
          </Text>
        ))}
      </Animated.View>

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.title}>
          Personen, die das Wort erraten haben:
        </Text>

        <View style={styles.listContainer}>
          {guessedPlayers.map((name, index) => {
            const isFastest = name === fastestPlayer;

            return (
              <View
                key={index}
                style={[
                  styles.nameCard,
                  isFastest && styles.fastestCard,
                ]}
              >
                <Text
                  style={[
                    styles.nameText,
                    isFastest && styles.fastestText,
                  ]}
                >
                  {isFastest ? "👑 " : ""}
                  {name}
                </Text>

                {isFastest && (
                  <Text style={styles.fastestBadge}>
                    Schnellster Spieler
                  </Text>
                )}
              </View>
            );
          })}
        </View>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "index" }],
            })
          }
        >
          <Text style={styles.menuButtonText}>
            Zurück zum Menü
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lobbyButton}
          onPress={() => navigation.navigate("LobbyUser")}
        >
          <Text style={styles.lobbyButtonText}>
            Zurück zur Lobby
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  confettiContainer: {
    position: "absolute",
    top: -50,
    left: 0,
    width,
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 10,
  },
  confetti: {
    fontSize: 24,
    opacity: 0.8,
  },
  content: {
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
  },
  listContainer: {
    gap: 14,
  },
  nameCard: {
    backgroundColor: "#EAF4FF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  fastestCard: {
    backgroundColor: "#FEF3C7",
    borderWidth: 1,
    borderColor: "#F59E0B",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1E3A8A",
  },
  fastestText: {
    color: "#92400E",
    fontWeight: "700",
  },
  fastestBadge: {
    marginTop: 4,
    fontSize: 12,
    color: "#B45309",
  },
  buttonContainer: {
    marginBottom: 24,
    gap: 12,
  },
  menuButton: {
    backgroundColor: "#16A34A",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  menuButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  lobbyButton: {
    backgroundColor: "#E5E7EB",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  lobbyButtonText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "500",
  },
});
