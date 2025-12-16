import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function Tutorial() {
    const router = useRouter();
    const [expandedStep, setExpandedStep] = useState<number | null>(null);

    const toggleStep = (step: number) => {
        setExpandedStep(expandedStep === step ? null : step);
    };

    return (
        <ScrollView style={styles.safe}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back-outline" size={64} style={{ padding: 10 }} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.logo}>Wie spielt man?</Text>
            </View>

            <View style={styles.content}>
                {[
                    {
                        title: "1. Das Ziel",
                        content: "Ihr seid ein Team aus zwei Künstlern! Gemeinsam malt ihr ein geheimes Bild – Pixel für Pixel. Die anderen Spieler müssen erraten, was ihr malt."
                    },
                    {
                        title: "2. Das Spielfeld",
                        content: "Ein 8x8-Raster mit 16 Farben steht euch zur Verfügung. Jeder Pixel zählt!"
                    },
                    {
                        title: "3. Eure Aufgabe",
                        content: "Abwechselnd setzt ihr je einen Pixel pro Runde. Ihr habt 12 Sekunden Zeit pro Zug."
                    },
                    {
                        title: "4. Der Trick",
                        content: "Kommunikation verboten! Ihr müsst euch blind verstehen – wie bei einem perfekten Team."
                    },
                    {
                        title: "5. Das Geheimnis",
                        content: "Vor dem Spiel bekommt ihr ein Stichwort: \n(z. B. 'Haus' oder 'Herz'). Das ist eure Vorlage!"
                    }
                ].map((step, index) => (
                    <View key={index} style={styles.stepContainer}>
                        <TouchableOpacity
                            style={styles.stepHeader}
                            onPress={() => toggleStep(index + 1)}
                        >
                            <Text style={styles.stepTitle}>{step.title}</Text>
                            <Ionicons
                                name={expandedStep === index + 1 ? "chevron-up" : "chevron-down"}
                                size={24}
                                color="#5a6ca0"
                                style={styles.chevron}
                            />
                        </TouchableOpacity>
                        {expandedStep === index + 1 && (
                            <View style={styles.stepContent}>
                                <Text style={styles.stepText}>{step.content}</Text>
                            </View>
                        )}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: "9%",
    },
    header: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 18,
    },
    logo: {
        fontSize: 48,
        fontWeight: "300",
        marginVertical: "4%",
        letterSpacing: 2,
        color: "#000",
    },
    content: {
        paddingHorizontal: 28,
        marginBottom: 20,
    },
    stepContainer: {
        marginBottom: 10,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    stepHeader: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f4ff", // Dezent pastelliger Hintergrund
    },
    stepTitle: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#333",
    },
    chevron: {
        marginLeft: 10,
    },
    stepContent: {
        padding: 15,
        backgroundColor: "#fff",
    },
    stepText: {
        fontSize: 16,
        lineHeight: 22,
        color: "#555",
    },
});
