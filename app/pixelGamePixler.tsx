import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PixelPixlerScreen() {
    const [selectedColor, setSelectedColor] = useState('#000000');

    const [grid, setGrid] = useState(
        Array(8).fill(null).map(() => Array(8).fill('#d9d9d9'))
    );

    const handleCellPress = (rowIdx: number, colIdx: number) => {
        const newGrid = [...grid];
        newGrid[rowIdx] = [...newGrid[rowIdx]]; // Kopie der Zeile für Immutability
        newGrid[rowIdx][colIdx] = selectedColor;
        setGrid(newGrid);
    };

    const paletteRows = [
        ['#000000', '#1d2b53', '#7e2553', '#008751', '#ab5236', '#5f574f', '#c2c3c7', '#fff1e8'],
        ['#ff003d', '#ffa300', '#ffec27', '#00e436', '#29adff', '#83769c', '#ff77a8', '#ffccaa']
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.title}>Runde 1</Text>
            </View>
            <View style={[styles.headerRow]}>
                <Text style={styles.title}>SpielerIn pixelt!</Text>
                <View style={styles.timerBubble}>
                    <Text style={styles.timerText}>12s</Text>
                </View>
            </View>

            {/* interaktives Grid */}
            <View style={styles.gridContainer}>
                {grid.map((row, rowIdx) => (
                    <View key={rowIdx} style={styles.gridRow}>
                        {row.map((cellColor, colIdx) => (
                            <TouchableOpacity
                                key={colIdx}
                                style={[styles.cell, { backgroundColor: cellColor }]}
                                onPress={() => handleCellPress(rowIdx, colIdx)}
                                activeOpacity={0.7}
                            />
                        ))}
                    </View>
                ))}
            </View>

            {/* interaktive Farbpalette */}
            <View style={styles.palette}>
                {paletteRows.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.paletteRow}>
                        {row.map((color) => (
                            <TouchableOpacity
                                key={color}
                                style={[
                                    styles.colorBox,
                                    { backgroundColor: color },
                                    // Hervorhebung der aktiven Farbe
                                    selectedColor === color && styles.selectedColorBox
                                ]}
                                onPress={() => setSelectedColor(color)}
                            />
                        ))}
                    </View>
                ))}
            </View>

            {/* Ratebox mit fixed Text */}
            <View style={styles.ratebox}>
                <Text style={styles.rateTitle}>Ratebox</Text>
                <Text style={styles.guess}><Text style={styles.big}>Lukas:</Text> Wald</Text>
                <Text style={styles.guess}><Text style={styles.big}>Nele:</Text> Rose</Text>
                <Text style={styles.guess}><Text style={styles.big}>Lukas:</Text> Baum</Text>
                <Text style={styles.guess}><Text style={styles.big}>Lukas:</Text> Blume</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#ffffff'
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#000066'
    },
    timerBubble: {
        backgroundColor: '#e7e7e7',
        marginLeft: 10,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
    },
    timerText: {
        fontSize: 16,
        fontWeight: '600'
    },
    gridContainer: {
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
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    selectedColorBox: {
        borderWidth: 3,
        borderColor: '#ffffff',
        transform: [{ scale: 1.1 }]
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
    big: {
        fontWeight: '700'
    }
});