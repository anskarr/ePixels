import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

type FinishProps = {
    guessedBy: string; // z.B. "Apfel"
};

const Finish: React.FC<FinishProps> = ({guessedBy}) => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Spiel beendet</Text>

            <Text style={styles.text}>
                Das Wort wurde erraten von
            </Text>

            <Text style={styles.playerName}>
                Lukas,
                Nele
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonSecondary}
                    onPress={() => navigation.navigate("index")}
                >
                    <Text style={styles.buttonText}>Zurück zum Menü</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Finish;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 8,
    },
    playerName: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#26b33b",
        marginBottom: 40,
    },
    buttonContainer: {
        width: "100%",
        gap: 16,
    },
    buttonSecondary: {
        backgroundColor: "#2b9bb8",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
    },
});
