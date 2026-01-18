import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';

export const useTimer = (initialTimeInSeconds: number) => {
    const router = useRouter();

    const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(intervalId);
                    router.navigate('./finish')
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [router]);
    return timeLeft;
};