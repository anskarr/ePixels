import React, { createContext, useContext } from 'react';
import { useAudioPlayer } from 'expo-audio';

interface SoundContextType {
    playClick: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
    const player = useAudioPlayer(require('../assets/sounds/click.mp3'));

    const playClick = () => {
        if (player) {
            player.seekTo(0);
            player.play();
        }
    };

    return (
        <SoundContext.Provider value={{ playClick }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound muss innerhalb eines SoundProviders verwendet werden');
    }
    return context;
};