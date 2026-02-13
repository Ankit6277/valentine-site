import { useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { Volume2, VolumeX } from "lucide-react";

const AudioController = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const bgmRef = useRef<Howl | null>(null);

    useEffect(() => {
        // Initialize background music
        // PLACEHOLDER: Replace with actual path to audio file
        bgmRef.current = new Howl({
            src: ["/audio/bgm.mp3"], // User needs to add this file
            loop: true,
            volume: 0.5,
            autoplay: false,
        });

        return () => {
            bgmRef.current?.unload();
        };
    }, []);

    const toggleMusic = () => {
        if (!bgmRef.current) return;

        if (isPlaying) {
            bgmRef.current.pause();
        } else {
            bgmRef.current.play();
            // Fade in effect
            bgmRef.current.fade(0, 0.5, 1000);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={toggleMusic}
            className="fixed bottom-4 left-4 z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-pink-200 hover:scale-110 transition-transform text-valentine-red"
            title={isPlaying ? "Pause Music" : "Play Music"}
        >
            {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
    );
};

export default AudioController;
