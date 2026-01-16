import React ,{useState}from 'react';
import {TouchableOpacity,FlatList,Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function PixelGuesserScreen() {

    const [guess, onGuessText] = useState('');
    const [guesses,onGuessEnter]  = useState<string[]>([])

    const addGuess = () =>{
       const newGuess = guess.trim();
       if (!newGuess) return Alert.alert("kein leerer Text")
       onGuessEnter(prev =>[newGuess,...prev]);
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

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Hier Lösung eingeben"
                    value={guess}
                    style={styles.textInput}
                    onChangeText={onGuessText}
                    returnKeyType="send"
                    placeholderTextColor="#888"
                />
                <TouchableOpacity style={styles.iconButton} onPress={addGuess}>
                    <MaterialIcons name="send" size={24} color="#007AFF" />
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#ffffff',
        flex:1
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
        width:"85%",
        justifyContent:'flex-end',
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

