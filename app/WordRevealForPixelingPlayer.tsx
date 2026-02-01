import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useRouter} from 'expo-router'

export default function DrawScreen() {
    const wordToDraw = "Apfel"
    const partnerName = "Frederick"
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.navigate('./pixelGamePixler')
        }, 5000)

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>

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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
        lineHeight: 40,
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
        color: '#2b9bb8',
        textAlign: 'center',
    },
    nameBadge: {
        backgroundColor: '#a3c9d3',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginTop: 10,
        minWidth: 200,
        alignItems: 'center',
    },
    nameText: {
        fontSize: 28,
        fontWeight: '400',
        color: '#000',
        textAlign: 'center',
    },
});