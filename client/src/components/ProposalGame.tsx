import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import confetti from "canvas-confetti";

const ProposalGame = () => {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const noBtnControls = useAnimation();

    // Texts that appear on the "No" button or as warnings
    const noTexts = [
        "No",
        "Are you sure?",
        "Really sure?? 😭",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
    ];

    const handleNoHover = async () => {
        setNoCount(noCount + 1);

        // Randomly move the button
        const x = Math.random() * 200 - 100; // -100 to 100
        const y = Math.random() * 200 - 100;

        await noBtnControls.start({
            x: x,
            y: y,
            rotate: Math.random() * 20 - 10,
            transition: { duration: 0.2 }
        });
    };

    const handleYesClick = async () => {
        setYesPressed(true);
        confetti({
            particleCount: 150,
            spread: 60,
            origin: { y: 0.6 }
        });

        // Save to backend
        try {
            await fetch('http://localhost:3000/api/save-response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Valentine',
                    response: 'YES!!!',
                    timestamp: new Date().toISOString()
                }),
            });
        } catch (error) {
            console.error('Error saving response:', error);
        }
    };

    if (yesPressed) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center z-20 relative">
                <motion.h1
                    className="text-6xl md:text-8xl font-dancing text-valentine-red font-bold text-center drop-shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    YAYYYY! !!! <br /> I Love You! 💖
                </motion.h1>
                <motion.img
                    src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                    alt="Bear Kiss"
                    className="mt-8 rounded-lg shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center z-10 relative px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-dancing text-valentine-red mb-8">
                Will you be my Valentine?
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                <motion.button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition-colors border-4 border-green-400"
                    style={{ fontSize: `${Math.min(2 + noCount * 0.5, 6)}rem` }} // Grows as No is clicked/hovered
                    onClick={handleYesClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    YES 💖
                </motion.button>

                <motion.button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg absolute md:relative"
                    animate={noBtnControls}
                    onHoverStart={handleNoHover}
                    onClick={handleNoHover}
                    initial={{ x: 0, y: 0 }}
                >
                    {noTexts[Math.min(noCount, noTexts.length - 1)]}
                </motion.button>
            </div>

            {noCount > 0 && (
                <div className="mt-8 text-gray-500 italic">
                    (The YES button is getting bigger... hint hint 😉)
                </div>
            )}
        </div>
    );
};

export default ProposalGame;
