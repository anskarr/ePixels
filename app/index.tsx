import React, {useState} from "react";
import {Ionicons} from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";
import {useRouter} from 'expo-router';

const {width} = Dimensions.get("window");

export default function HomeScreen() {
    const [lobbyCode, setLobbyCode] = useState("");
    const router = useRouter();

    const onPlay = () => {
        router.navigate('./LobbyUser');
    };

    const onCreateRoom = () => {
        router.navigate('./LobbyHost');
    };

    const onJoinRoom = () => {
        if (!lobbyCode){
            alert("Bitte gültigen Raum-Code eingeben.")
        }else{
            router.navigate('./LobbyUser');
        }
    };

    const onSettings = () => {
        router.navigate('/options');
    };

    const onTutorial = () => {
        router.navigate('/tutorial');
    };

    return (
        <KeyboardAvoidingView style={styles.safe}
                              behavior={undefined}
        >
            <KeyboardAwareScrollView
                contentContainerStyle={{flexGrow: 1}}
                enableOnAndroid={true}
            >
                <StatusBar barStyle="dark-content"/>
                <View style={styles.topRow}>
                    <TouchableOpacity onPress={onSettings}
                        accessibilityLabel="Settings">
                        <Ionicons name="settings" size={40}/>
                    </TouchableOpacity>
                </View>

                {/* Logo / Titel */}
                <View style={styles.header}>
                    <Text style={styles.logo}>epiXels</Text>
                </View>

                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.redButton}
                        onPress={onTutorial}
                        accessibilityRole="button"
                        accessibilityLabel="Tutorial ansehen"
                    >
                        <Text style={styles.redButtonText}>Tutorial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.playButton}
                        onPress={onPlay}
                        accessibilityRole="button"
                        accessibilityLabel="Play"
                    >
                        <Text style={styles.playText}>Zufälliges Spiel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.blueButton}
                        onPress={onCreateRoom}
                        accessibilityRole="button"
                        accessibilityLabel="Raum erstellen"
                    >
                        <Text style={styles.blueButtonText}>Raum erstellen</Text>
                    </TouchableOpacity>

                    <View style={styles.lobbyRow}>
                        <Text style={styles.hash}>#</Text>
                        <TextInput
                            style={[styles.lobbyInput, styles.textInput]}
                            placeholder="Raum Code"
                            placeholderTextColor="#222"
                            value={lobbyCode}
                            onChangeText={setLobbyCode}
                            accessibilityLabel="Raum Code"
                            returnKeyType="done"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Freunden beitreten (dynamic color) */}
                    <TouchableOpacity
                        style={[
                            styles.greyButton,
                            lobbyCode.trim().length > 0 && styles.blueButton // Overwrites grey if code exists
                        ]}
                        onPress={onJoinRoom}
                        accessibilityRole="button"
                        accessibilityLabel="Freunden beitreten"
                    >
                        <Text style={styles.blueButtonText}>Freunden beitreten</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topRow: {
        height: 50,
        flexDirection: "flex-start",
        alignItems: "marginRight",
        paddingHorizontal: 16,
        paddingTop: 12,
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

    textInput: {
        width: '81%', //etwas kleiner skalieren wegen dem # Zeichen davor
        height: 50,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: "#000",
        backgroundColor: "#E6E6E6",
        paddingHorizontal: 12,
        marginVertical: 6,
        textAlign: "center",
        fontSize: 18,
    },

    playButton: {
        width: Math.min(width - 80, 360),
        height: 74,
        backgroundColor: "#26b33b",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "3%",
        // leichter Schatten (iOS/Android)
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
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
        backgroundColor: "#1aa0c4",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15%",
        paddingHorizontal: 10,
    },
    greyButton: {
        width: Math.min(width - 80, 360),
        minWidth: 180,
        height: 40,
        backgroundColor: "#8d8787",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "15%",
        paddingHorizontal: 10,
    },
    blueButtonText: {
        fontSize: 18,
        color: "#000",
        textAlign: "center",
    },

    redButton: {
        width: Math.min(width - 80, 360),
        minWidth: 180,
        height: 50,
        backgroundColor: '#ff8000',
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 3,
    },
    redButtonText: {
        fontSize: 24,
    },

    lobbyRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "10%",
        marginBottom: "5%",
    },
    hash: {
        fontSize: 48,
        marginRight: 8,
        color: "#000",
    },
    lobbyInput: {
        textAlign: "center",
        width: 200,
    },
});
