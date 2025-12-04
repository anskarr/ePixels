import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function PixelGuesserScreen() {

    const [text, onChangeText] = React.useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={[
                styles.container, {
                    flexDirection: 'row'
                }
            ]}>
                <Text style={styles.title}>SpielerIn pixelt!</Text>
                <Text style={styles.timerBubble}> <Text style={styles.timerText}>12s</Text></Text>
            </View>
            <View style={styles.gridContainer}>
                {[...Array(8)].map((_, rowIdx) => (
                    <View key={rowIdx} style={styles.gridRow}>
                        {[...Array(8)].map((_, colIdx) => {
                            return (<View key={colIdx} style={[styles.cell]}/>);
                        })}
                    </View>
                ))}
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Hier Lösung eingeben"
                    keyboardType='default'
                />
            </KeyboardAvoidingView>
            <View style={styles.ratebox}>
                <Text style={styles.rateTitle}>Lösungsvorschläge</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Wald</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Nele:</Text> Rose</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Baum</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Blume</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Blume</Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        margin: 8,
        color: '#000066'
    },
    timerBubble: {
        backgroundColor: '#e7e7e7',
        margin: 8,
        padding: 8,
        borderRadius: 20,
    },
    timerText: {
        fontSize: 16,
        fontWeight: '600'
    },
    gridContainer: {
        height: 356,
        width: 356,
        borderWidth: 2,
        borderColor: '#999',
    },
    gridRow: {
        flexDirection: 'row'
    },
    cell: {
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        backgroundColor: '#d9d9d9'
    },
    input: {
        height: 40,
        margin: 20,
        borderWidth: 2,
        padding: 10,
    },
    ratebox: {
        backgroundColor: '#e6e6e6',
        padding: 20,
        width: '85%',
        borderRadius: 12
    },
    rateTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#999'
    },
    guess: {
        fontSize: 16,
        marginVertical: 2
    },
    bold: {
        fontWeight: '700'
    },
});

