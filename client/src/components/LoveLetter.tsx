import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import confetti from "canvas-confetti";

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#ff6b81", "#ff4757", "#ffffff"],
        });
    };

    return (
        <div className="min-h-screen py-20 flex flex-col items-center justify-center relative z-10 px-4">
            <h2 className="text-4xl md:text-5xl font-dancing text-valentine-red mb-12">
                A Letter For You 💌
            </h2>

            <div className="relative w-full max-w-lg perspective-1000">
                {!isOpen ? (
                    <motion.div
                        layoutId="envelope"
                        className="bg-white p-8 rounded-lg shadow-xl cursor-pointer flex flex-col items-center gap-4 border-2 border-valentine-pink"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        onClick={handleOpen}
                    >
                        <Mail size={64} className="text-valentine-red" />
                        <p className="text-xl font-outfit text-gray-600">Tap to Open</p>
                    </motion.div>
                ) : (
                    <motion.div
                        layoutId="envelope"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-pink-200 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 to-valentine-red" />

                        <div className="prose prose-pink max-w-none text-gray-700 font-outfit">
                            <p className="indent-8 text-lg leading-loose">
                                My Dearest,
                            </p>
                            <p className="text-lg leading-loose">
                                Words cannot express how much you mean to me. You are the spark in my life, the melody in my heart, and the reason for my smile.
                            </p>
                            <p className="text-lg leading-loose">
                                I wanted to create something special to show you just how much I care...
                            </p>
                            <p className="text-right font-dancing text-2xl mt-8 text-valentine-red">
                                Yours Forever, <br /> Me
                            </p>
                        </div>

                        <motion.button
                            className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline"
                            onClick={() => setIsOpen(false)}
                        >
                            Close Letter
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default LoveLetter;
