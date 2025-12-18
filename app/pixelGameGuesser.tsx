import React ,{useState}from 'react';
import {KeyboardAvoidingView, TouchableOpacity,Platform,FlatList,Alert, StyleSheet, Text, TextInput, View} from 'react-native';

export default function PixelGuesserScreen() {

    const [guess, onGuessText] = useState('');
    const [guesses,onGuessEnter]  = useState<string[]>([])

    const addGuess = () =>{
       const newGuess = guess.trim();
       if (!newGuess) return Alert.alert("kein leerer Text")
       onGuessEnter(prev =>[...prev,newGuess]);
       onGuessText("");
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Runde 1</Text>
            </View>
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
                <KeyboardAvoidingView style={[styles.input,{flexDirection:"row"}]}
                                      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                    <TextInput
                        placeholder="Hier Lösung eingeben"
                        value={guess}
                        style={styles.input}
                        onChangeText={onGuessText}
                        returnKeyType="done"
                    />
                    <TouchableOpacity style={styles.ghostButton} onPress={addGuess}>
                        <Text style={styles.ghostButtonText}>ENTER</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>

            <View style={styles.ratebox}>
                <Text style={styles.rateTitle}>Ratebox</Text>
                <FlatList
                    inverted
                    data={guesses}
                    keyExtractor={(item,index)=>`${item}-${index}`}
                    style={styles.guess}
                    renderItem={({item})=>(
                        <View style={styles.guess}>
                            <Text><Text style={styles.big}>NAME:</Text> {item}</Text>
                        </View>
                    )}
                />
            </View>

        </View>
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
    input: {
        width: "85%",
        alignItems:"center",
        backgroundColor: "#E6E6E6",
        borderRadius: 10,
        fontSize: 16,
        margin: 8,
        paddingLeft:8,
    },
    ghostButton: {
        alignItems:"center",
        justifyContent:"center",
        marginRight:10
    },
    ghostButtonText: { color: "#357ABD", fontSize: 16 },
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
    },
});

