import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function PixelPixlerScreen() {
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
            <View style={styles.palette}>
                <View style={styles.paletteRow}>
                    {['#000000', '#1d2b53', '#7e2553', '#008751', '#ab5236', '#5f574f', '#c2c3c7', '#fff1e8'].map((c, i) => (
                        <View key={i} style={[styles.colorBox, {backgroundColor: c}]}/>
                    ))}
                </View>
                <View style={styles.paletteRow}>
                    {['#ff003d', '#ffa300', '#ffec27', '#00e436', '#29adff', '#83769c', '#ff77a8', '#ffccaa'].map((c, i) => (
                        <View key={i} style={[styles.colorBox, {backgroundColor: c}]}/>
                    ))}
                </View>
            </View>

            <View style={styles.ratebox}>
                <Text style={styles.rateTitle}>Lösungsvorschläge</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Wald</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Nele:</Text> Rose</Text>
                <Text style={styles.guess}><Text style={styles.bold}>Lukas:</Text> Baum</Text>
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
        marginBottom: 20,
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
    palette: {
        padding: 10,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        marginBottom: 30
    },
    paletteRow: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center'
    },
    colorBox: {
        width: 32,
        height: 32,
        borderRadius: 4,
        marginHorizontal: 4
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
    }
});

