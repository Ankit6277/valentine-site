import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface LoaderProps {
    onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
    const [text, setText] = useState("");
    const messages = [
        "Initializing Love Protocol...",
        "Heart Connection Established 💘",
        "Preparing Something Special...",
    ];
    const [msgIndex, setMsgIndex] = useState(0);

    useEffect(() => {
        let currentText = "";
        let charIndex = 0;

        // Typewriter effect
        const typeInterval = setInterval(() => {
            if (charIndex < messages[msgIndex].length) {
                currentText += messages[msgIndex][charIndex];
                setText(currentText);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    if (msgIndex < messages.length - 1) {
                        setMsgIndex((prev) => prev + 1);
                        setText("");
                    } else {
                        // Finished all messages
                        setTimeout(onComplete, 1000);
                    }
                }, 1500); // Wait before next message
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, [msgIndex, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pink-100/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="relative">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Heart className="w-32 h-32 text-valentine-red fill-valentine-red drop-shadow-lg filter" />
                </motion.div>

                {/* Floating mini hearts */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5],
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                        }}
                    >
                        <Heart className="w-6 h-6 text-valentine-pink fill-valentine-pink" />
                    </motion.div>
                ))}
            </div>

            <motion.p
                className="mt-8 text-2xl font-bold text-valentine-red font-outfit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {text}
                <span className="animate-pulse">|</span>
            </motion.p>
        </motion.div>
    );
};

export default Loader;
