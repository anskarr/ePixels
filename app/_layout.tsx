import {Stack} from 'expo-router';

export default function RootLayout() {
  return (
     <Stack
           screenOptions={{
             headerShown: true, // Header anzeigen
             headerTitle: '',   // Leeren Titel setzen
             headerBackVisible: false, // Back-Button ausblenden (optional)
             headerStyle: {
               backgroundColor: '#fff', // Hintergrundfarbe des Headers
               height: 60, // Optional: Höhe des Headers anpassen
             },
             headerShadowVisible: false, // Optional: Schatten entfernen
           }}
         >
     </Stack>
  );
}