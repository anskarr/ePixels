import {Stack} from 'expo-router';
import { SoundProvider } from '../context/SoundContext';

export default function RootLayout() {
    return (
        <SoundProvider>
            <Stack
                screenOptions={{
                    headerShown: true, // Header anzeigen
                    headerTitle: '',   // Leeren Titel setzen
                    headerBackVisible: false, // Back-Button ausblenden (optional)
                    headerStyle: {
                        backgroundColor: '#fff', // Hintergrundfarbe des Headers
                    },
                    headerShadowVisible: false, // Optional: Schatten entfernen
                }}
            >
            </Stack>
        </SoundProvider>
    );
}