import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        // Target: Next Valentine's Day (Feb 14)
        const now = new Date();
        let year = now.getFullYear();
        const valentineDate = new Date(year, 1, 14); // Month is 0-indexed, so 1 is Feb

        if (now > valentineDate) {
            valentineDate.setFullYear(year + 1);
        }

        // Or if there is a specific proposal date/time, set it here

        const difference = valentineDate.getTime() - now.getTime();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval as keyof typeof timeLeft]) {
            return null;
        }

        return (
            <motion.div
                key={interval}
                className="flex flex-col items-center mx-4 bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ bounce: 0.5 }}
            >
                <span className="text-4xl md:text-6xl font-bold font-outfit text-white drop-shadow-md">
                    {timeLeft[interval as keyof typeof timeLeft]}
                </span>
                <span className="text-sm md:text-xl uppercase tracking-widest text-white mt-2">
                    {interval}
                </span>
            </motion.div>
        );
    });

    return (
        <div className="py-20 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-pink-200/50">
            <h2 className="text-3xl md:text-4xl font-dancing text-valentine-red mb-12">
                Countdown to Our Forever ⏳
            </h2>
            <div className="flex flex-wrap justify-center">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            </div>
        </div>
    );
};

export default Countdown;
