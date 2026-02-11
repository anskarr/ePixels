import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {useTimer} from '../hooks/Timer';
import {useRouter} from 'expo-router';

export default function PixelPixlerScreen() {

    const router = useRouter();
    const timeLeft = useTimer(60);

    React.useEffect(() => {
       if(timeLeft==0){
           router.navigate('./finish')
       }
    }, [timeLeft]);

    const playerName = 'Peter';
    const [selectedColor, setSelectedColor] = useState('#000000');

    const [grid, setGrid] = useState(
        Array(8).fill(null).map(() => Array(8).fill('#d9d9d9'))
    );

    const handleCellPress = (rowIdx: number, colIdx: number) => {
        const newGrid = [...grid];
        newGrid[rowIdx] = [...newGrid[rowIdx]];
        newGrid[rowIdx][colIdx] = selectedColor;
        setGrid(newGrid);
    };

    //Pico-8 Palette
    const paletteRows = [
        ['#000000', '#1d2b53', '#7e2553', '#008751', '#ab5236', '#5f574f', '#c2c3c7', '#fff1e8'],
        ['#ff003d', '#ffa300', '#ffec27', '#00e436', '#29adff', '#83769c', '#ff77a8', '#ffccaa']
    ];

    const [menuVisible, setMenuVisible] = useState(false);

    const [modalView, setModalView] = useState('menu');

    const openMenu = () => {
        setModalView('menu');
        setMenuVisible(true);
    };

    const handleLeaveRoom = () => {
        setMenuVisible(false);
        router.dismissAll(); // Oder router.replace('/'), je nach Struktur
        router.navigate('/');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.settingsIcon}>
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    <Ionicons name="settings" size={40}/>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={menuVisible}
                onRequestClose={() => setMenuVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                    {modalView === 'menu' && (
                        <>
                            <Text style={styles.modalTitle}>Optionen</Text>

                            <TouchableOpacity style={[styles.menuItem, styles.closeButton]} onPress={() => setMenuVisible(false)}>
                                <Text style={styles.closeButtonText}>Weiterspielen</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.menuItem, styles.closeButton]} onPress={() => {router.navigate('/tutorial')}}>
                                <Text style={styles.closeButtonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.menuItem, styles.leaveButton]} onPress={() => setModalView('confirm')} >
                                <Text style={styles.closeButtonText}>Zurück zum Hauptmenü</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    {modalView === 'confirm' && (
                        <>
                            <Text style={styles.modalTitle}>Bist du sicher?</Text>
                            <Text style={styles.warningText}>
                                Wenn du die Runde verlässt, kannst du nicht wieder beitreten.
                            </Text>

                            {/* Option 1: Weiterspielen (Zurück zum Spiel oder zurück zu Optionen) */}
                            <TouchableOpacity
                                style={[styles.menuItem, styles.closeButton]}
                                onPress={() => setModalView('menu')} // Schließt Modal direkt
                                // Alternativ: onPress={() => setModalView('menu')} // Geht zurück zu Optionen
                            >
                                <Text style={styles.closeButtonText}>Weiterspielen</Text>
                            </TouchableOpacity>

                            {/* Option 2: Wirklich verlassen */}
                            <TouchableOpacity
                                style={[styles.menuItem, styles.leaveButton]}
                                onPress={handleLeaveRoom}
                            >
                                <Text style={styles.closeButtonText}>Runde verlassen</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    </View>
                </View>
            </Modal>

            <View style={styles.headerRow}>
                <Text style={styles.title}>Runde 1/1</Text>
            </View>
            <View style={[styles.wordRow]}>
                <Text style={styles.title}>{playerName}, pixle <Text style={styles.begriff}>Apfel </Text>!</Text>
                <View style={styles.timerBubble}>
                    <Text style={styles.timerText}>{timeLeft}s</Text>
                </View>
            </View>

            {/* interaktives Grid */}
            <View style={styles.gridContainer}>
                {grid.map((row, rowIdx) => (
                    <View key={rowIdx} style={styles.gridRow}>
                        {row.map((cellColor, colIdx) => (
                            <TouchableOpacity
                                key={colIdx}
                                style={[styles.cell, {backgroundColor: cellColor}]}
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
                                    {backgroundColor: color},
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
        paddingVertical: 5,
        backgroundColor: '#ffffff',
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        margin: 4,
        color: '#000000'
    },
    begriff: {
        color: '#2b9bb8'
    },
    settingsIcon: {
        position: 'absolute',
        top: 2,
        left: 12},
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Dunkelt den Hintergrund ab
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuItem: {
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignItems: 'center',
    },
    menuText: {
        fontSize: 24,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#2b9bb8',
        borderRadius: 10,
        borderBottomWidth: 0,
    },
    closeButtonText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    leaveButton: {
        marginTop: 20,
        backgroundColor: '#ff8000',
        borderRadius: 10,
        borderBottomWidth: 0,
    },
    warningText: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 25,
        color: '#555',
        lineHeight: 22, // Bessere Lesbarkeit bei zwei Zeilen
    },
//     menuContent: {
//             alignItems: "center",
//             textAlignVertical: "center",
//             paddingHorizontal: 28,
//         },
    wordRow: {
        flexDirection: 'row',
        alignItems: 'center'
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
        marginBottom: 10,
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
        width: '85%',
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        margin: 10
    },
    paletteRow: {
        flexDirection: 'row',
        margin: 3,
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
        transform: [{scale: 1.1}]
    },
    ratebox: {
        backgroundColor: '#e6e6e6',
        padding: 20,
        width: '85%',
        borderRadius: 12,
        marginBottom: 10
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