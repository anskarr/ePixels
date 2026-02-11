import {StyleSheet, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import Slider from '@react-native-community/slider';

export default function Options() {
    const router = useRouter();

    return (
        <ScrollView style={styles.safe}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back-outline" size={48} style={{padding: 10,}}/>
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.sliderContainer}>
                    <Ionicons name="volume-high-outline" size={64}/>
                    <Slider
                        style={{width: 250, height: 64}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                    />
                </View>
                <View style={styles.sliderContainer}>
                    <Ionicons name="musical-notes-outline" size={64}/>
                    <Slider
                        style={{width: 250, height: 64}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                    />
                </View>
                <Text style={styles.titleText}>Impressum</Text>
                <Text style={styles.bodyText}>
                    Team F {'\n'}{'\n'}
                    Interaktive Systeme{'\n'}im Wintersemester 2025/26 {'\n'}{'\n'}
                    Hochschule für Angewandte Wissenschaften Hamburg
                </Text>
            </ScrollView>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
    },
    sliderContainer: {
        flexDirection: 'row',
        padding: 40,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 48,
        alignSelf: "flex-start",
        padding: 10
    },
    bodyText: {
        fontSize: 20,
        alignSelf: "flex-start",
        padding: 10
    }
});