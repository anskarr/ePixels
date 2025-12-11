import React, {useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert,
} from "react-native";
import {useRouter} from "expo-router";

export default function LobbyUser() {
    const router = useRouter();

    const maxPlayers = 4;

    const [players, setPlayers] = useState<string[]>(["Karsten (Host)"]);

    const [myName, setMyName] = useState("");
    const [joined, setJoined] = useState(false);

    const [newPlayerName, setNewPlayerName] = useState("");

    const joinLobby = () => {
        const name = myName.trim();
        if (!name) return Alert.alert("Bitte deinen Namen eingeben");
        if (players.includes(name)) return Alert.alert("Name bereits in der Lobby");
        if (players.length >= maxPlayers) return Alert.alert("Lobby ist voll");

        setPlayers(prev => [...prev, name]);
        setJoined(true);
        setMyName("");
    };

    const addPlayer = () => {
        const name = newPlayerName.trim();
        if (!name) return Alert.alert("Bitte Namen für neuen Pixler eingeben");
        if (players.length >= maxPlayers) return Alert.alert("Lobby ist voll");
        if (players.includes(name)) return Alert.alert("Name bereits in der Lobby");

        setPlayers(prev => [...prev, name]);
        setNewPlayerName("");
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("/")}>
                    <Text style={styles.leave}>◀ Verlassen</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Lobby</Text>

            {!joined ? (
                <View style={styles.centerBox}>
                    <TextInput
                        placeholder="Dein Name"
                        value={myName}
                        onChangeText={setMyName}
                        style={styles.input}
                        returnKeyType="done"
                    />
                    <TouchableOpacity style={styles.primaryButton} onPress={joinLobby}>
                        <Text style={styles.primaryButtonText}>Beitreten</Text>
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
                        renderItem={({item}) => (
                            <View style={styles.playerRow}>
                                <Text style={styles.playerText}>{item}</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => <View style={{height: 8}}/>}
                    />

                    {/* + Pixler direkt unter der Liste */}
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

                    {/* Waiting */}
                    <View style={styles.footer}>
                        <View style={styles.waitBox}>
                            <Text style={styles.waitText}>Warten auf Host…</Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: 40, alignItems: "center", backgroundColor: "#FAFAFA"},
    header: {width: "90%", alignItems: "flex-start"},
    leave: {color: "#357ABD", fontSize: 16},

    title: {fontSize: 28, fontWeight: "700", marginTop: 6},
    sub: {marginTop: 8, fontSize: 16},
    code: {color: "#357ABD", fontSize: 18, marginBottom: 12},

    centerBox: {width: "80%", marginTop: 20},
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
    primaryButtonText: {color: "white", textAlign: "center", fontSize: 16},

    playerList: {width: "85%", marginTop: 6, maxHeight: 300},

    playerRow: {
        backgroundColor: "#E8F2FA",
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderRadius: 10,
    },
    playerText: {fontSize: 18, textAlign: "left"},

    addBox: {width: "80%", marginTop: 12},
    ghostButton: {paddingVertical: 10, alignItems: "center"},
    ghostButtonText: {color: "#357ABD", fontSize: 16},

    footer: {width: "80%", marginTop: 12},
    waitBox: {padding: 14, borderRadius: 12, backgroundColor: "#999"},
    waitText: {color: "white", textAlign: "center", fontSize: 16},
});
