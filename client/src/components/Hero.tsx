import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    useEffect(() => {
        // Sparkle effect loop
        const ctx = gsap.context(() => {
            gsap.to(".sparkle", {
                opacity: 0,
                scale: 1.5,
                duration: 1,
                stagger: {
                    amount: 2,
                    from: "random"
                },
                repeat: -1,
                yoyo: true
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
            <motion.div style={{ y: y1 }} className="z-10 text-center px-4">
                <motion.h1
                    className="text-6xl md:text-8xl font-dancing text-valentine-red drop-shadow-md mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Hey Beautiful <span className="inline-block animate-bounce">💖</span>
                </motion.h1>

                <motion.p
                    ref={textRef}
                    className="text-2xl md:text-3xl font-outfit text-gray-700 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                >
                    I made something just for you…
                </motion.p>
            </motion.div>

            {/* Floating Elements Parallax */}
            <motion.div style={{ y: y2 }} className="absolute inset-0 pointer-events-none z-0">
                {/* Add some simple SVG shapes or images if needed */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "4s" }} />
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 z-20 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ChevronDown size={40} className="text-valentine-red" />
            </motion.div>
        </div>
    );
};

export default Hero;
