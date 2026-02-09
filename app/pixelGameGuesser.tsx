import React, {useState} from 'react';
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRouter} from 'expo-router' ;

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useTimer} from '../hooks/Timer';

export default function PixelGuesserScreen() {

    const router = useRouter();
    const timeLeft = useTimer(60);

    React.useEffect(()=>{
        fakePlayerDrawing(timeLeft);
        if(timeLeft==0){
            router.navigate('./finish')
        }
    },[timeLeft]);

    const [guess, onGuessText] = useState('');
    const [guesses, onGuessEnter] = useState<string[]>([]);

    const [grid, setGrid] = useState(
        Array(8).fill(null).map(() => Array(8).fill('#d9d9d9'))
    );

    const changeCellColor = (rowIdx: number, colIdx: number, selectedColor: string) => {
        setGrid(prevGrid => {
            return prevGrid.map((row, rIdx) =>
                rIdx === rowIdx
                    ? row.map((cell, cIdx) => (cIdx === colIdx ? selectedColor : cell))
                    : row
            );
        });
    };

    function checkCorrectGuess (currentGuess:string):boolean {
        return currentGuess === "Apfel" || currentGuess === "apfel";
    }

    //Pico-8 Palette
    const colors = ['#008751','#ff003d','#fff1e8'];
    //Funktion soll malen anderer Spieler vortäuschen
    function fakePlayerDrawing(currentTime:number){
        if(currentTime===59){
            changeCellColor(1,1,colors[1]);
            changeCellColor(6,6,colors[1]);
        }
        if(currentTime===58){
            changeCellColor(0,4,colors[0]);
            changeCellColor(1,3,colors[0]);
        }
        if(currentTime===57){
            changeCellColor(0,5,colors[0]);
            changeCellColor(1,4,colors[0]);
        }
        if(currentTime===56){
            changeCellColor(2,0,colors[1]);
            changeCellColor(3,0,colors[1]);
        }
        if(currentTime===55){
            changeCellColor(4,0,colors[1]);
            changeCellColor(5,0,colors[1]);
        }
        if(currentTime===54){
            changeCellColor(6,1,colors[1]);
            changeCellColor(7,2,colors[1]);
        }
        if(currentTime===53){
            for (let i = 2; i < 6; i++) {
                changeCellColor(7,i,colors[1]);
            }
        }
        if(currentTime===53){
            changeCellColor(6,6,colors[1]);
            changeCellColor(5,7,colors[1]);
        }
        if(currentTime===52){
            for (let i = 2; i < 5; i++) {
                changeCellColor(i,7,colors[1]);
            }
        }
        if(currentTime===51){
            changeCellColor(1,2,colors[1]);
        }
        if(currentTime===50){
            changeCellColor(1,5,colors[1]);
            changeCellColor(1,6,colors[1]);
        }
        if(currentTime===48){
            for (let i = 0; i < 7; i++) {
                changeCellColor(2,i,colors[1])

            }
        }
        if(currentTime===46){
            for (let i = 0; i < 7; i++) {
                changeCellColor(3,i,colors[1])
            }
        }
        if(currentTime===43){
            for (let i = 0; i < 7; i++) {
                changeCellColor(4,i,colors[1])
            }
        }
        if(currentTime===40){
            for (let i = 0; i < 7; i++) {
                changeCellColor(5,i,colors[1])
            }
        }
        if(currentTime===37){
            for (let i = 1; i < 7; i++) {
                changeCellColor(6,i,colors[1])
            }
        }
        if(currentTime===33){
            changeCellColor(3,2,colors[2])
        }
        if(currentTime===32){
            changeCellColor(3,3,colors[2])
        }
        if(currentTime===31){
            changeCellColor(4,2,colors[2])
        }
    }

    const addGuess = () => {
        const newGuess = guess.trim();
        if (!newGuess) return // nichts tun wenn leer
        onGuessEnter(prev => [newGuess, ...prev]);
        onGuessText("");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={Platform.OS === "android" ? 100 : 0}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.title}>Runde 1</Text>
                    </View>
                    <View style={[styles.containerRow, {flexDirection: 'row'}]}>
                        <Text style={styles.title}>Errate das Bild!</Text>
                        <Text style={styles.timerBubble}> <Text style={styles.timerText}>{timeLeft}s</Text></Text>
                    </View>
                    <View style={styles.gridContainer}>
                        {grid.map((row, rowIdx) => (
                            <View key={rowIdx} style={styles.gridRow}>
                                {row.map((cellColor, colIdx) => (
                                    <TouchableOpacity
                                        key={colIdx}
                                        style={[styles.cell, {backgroundColor: cellColor}]}
                                        activeOpacity={0.7}
                                    />
                                ))}
                            </View>
                        ))}
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Hier Lösung eingeben"
                            value={guess}
                            style={styles.textInput}
                            onChangeText={onGuessText}
                            returnKeyType="send"
                            placeholderTextColor="#888"
                            onSubmitEditing={addGuess}
                        />
                        <TouchableOpacity style={styles.iconButton} onPress={addGuess}>
                            <MaterialIcons name="send" size={24} color="#007AFF"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ratebox}>
                        <Text style={styles.rateTitle}>Ratebox</Text>
                        <FlatList
                            inverted
                            data={guesses}
                            keyExtractor={(item, index) => `${item}-${index}`}
                            style={styles.guess}
                            renderItem={({item}) => (
                                <View style={styles.guess}>
                                    <Text><Text style={styles.big}>Peter:</Text> {item}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 5,
        justifyContent: 'flex-end',
    },
    containerRow: {
        alignItems: 'center',
        paddingVertical: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        margin: 8,
        color: '#000000'
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
    gridColumn: {
        flexDirection: 'column'
    },
    cell: {
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        backgroundColor: '#d9d9d9'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 8,
        marginHorizontal: 15,
        marginVertical: 10,
        height: 50,
        width: "85%",
        justifyContent: 'flex-end',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    iconButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    ratebox: {
        backgroundColor: '#e6e6e6',
        padding: 20,
        width: '85%',
        height: '25%',
        margin: 12,
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
    },
});
