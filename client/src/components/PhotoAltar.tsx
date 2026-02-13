import { motion } from "framer-motion";

const PhotoAltar = () => {
    return (
        <div className="min-h-screen py-20 flex flex-col items-center justify-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="glass-card p-4 rounded-3xl relative rotate-2 hover:rotate-0 transition-transform duration-500 ease-out"
                style={{ maxWidth: "90vw", width: "400px" }}
            >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-transparent opacity-30 z-10 pointer-events-none" />

                    <img
                        src="/us.jpeg"
                        alt="Us"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                        }}
                    />

                    <div className="fallback hidden absolute inset-0 flex items-center justify-center bg-pink-50 text-valentine-red p-4 text-center">
                        <div>
                            <p className="font-bold mb-2">📸 Photo Missing!</p>
                            <p className="text-sm">Put your photo in <br /><code className="bg-pink-100 px-1 rounded">client/public/us.jpeg</code></p>
                        </div>
                    </div>
                </div>

                <div className="absolute -top-6 -right-6 text-6xl animate-bounce" style={{ animationDelay: "1s" }}>✨</div>
                <div className="absolute -bottom-6 -left-6 text-6xl animate-bounce" style={{ animationDelay: "2s" }}>💖</div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-2xl font-outfit text-valentine-red text-center max-w-lg px-4"
            >
                "Every moment with you feels like a dream I never want to wake up from..."
            </motion.p>
        </div>
    );
};

export default PhotoAltar;
