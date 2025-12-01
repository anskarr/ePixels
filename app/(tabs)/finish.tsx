import {StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

export default function Finish() {
    return (
        <View>
            <View style={styles.topContainer}>
                <Text style={styles.topText}>Teilnehmer, die das Wort "PLATZHALTER" erraten haben:</Text>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.playerContainer}>
                    <Text style={styles.baseText}>Lukas</Text>
                </View>
                <View style={styles.playerContainer}>
                    <Text style={styles.baseText}>Nele</Text>
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.playAgainContainer}>
                    <Text style={styles.playAgainText}>Play Again?</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    topContainer:{
        alignSelf: "center",
        padding: 20,
    },
    topText:{
        fontSize: 24,
        textAlign: "center",
    },
    content:{
        flex: 1,
        paddingBottom: 300,
    },
    bottomContainer:{
        position: "absolute",
        top: 640,
        bottom: 0,
        left: 0,
        right: 0,
    },
    playerContainer:{
        alignSelf: "center",
        margin: 10,
        height: 50,
        width: 300,
        backgroundColor: 'lightblue',
        borderRadius: 25,
    },
    baseText:{
        alignSelf: "flex-start",
        fontSize: 30,
        marginTop: 3,
        marginLeft: 20,
    },
    playAgainContainer:{
        alignSelf: "center",
        verticalAlign: "bottom",
        margin: 10,
        height: 70,
        width: 340,
        backgroundColor: 'lightgreen',
        borderRadius: 20,
    },
    playAgainText:{
        alignSelf: "center",
        fontSize: 48,
    }
});