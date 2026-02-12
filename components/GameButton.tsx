import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { useSound } from '../context/SoundContext';

interface GameButtonProps extends TouchableOpacityProps {
    title?: string;
    children?: React.ReactNode;
}

export const GameButton = ({ onPress, title, children, style, ...props }: GameButtonProps) => {
    const { playClick } = useSound();

    const handlePress = (event: any) => {
        playClick();
        if (onPress) {
            onPress(event);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.button, style]} {...props}>
            {title ? <Text style={styles.text}>{title}</Text> : children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
    }
});