import { motion } from "framer-motion";

const memories = [
    { id: 1, title: "Our First Date", date: "Jan 1, 2024", desc: "The sparkle in your eyes..." },
    { id: 2, title: "Beach Sunset", date: "Feb 14, 2024", desc: "Hand in hand, watching the sun dip..." },
    { id: 3, title: "Movie Night", date: "Mar 10, 2024", desc: "Cuddles and popcorn." },
    { id: 4, title: "Adventure Time", date: "Apr 5, 2024", desc: "Exploring the unknown together." },
];

const MemoryGallery = () => {
    return (
        <div className="min-h-screen py-20 px-4 flex flex-col items-center z-10 relative">
            <motion.h2
                className="text-4xl md:text-5xl font-dancing text-valentine-red mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Our Memory Universe 🌌
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {memories.map((mem, index) => (
                    <motion.div
                        key={mem.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-pink-100 hover:shadow-2xl hover:border-valentine-red cursor-pointer group"
                    >
                        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-medium">{mem.desc}</p>
                            </div>
                            <div className="w-full h-full bg-pink-50 flex items-center justify-center text-pink-300">
                                Image Placeholder
                            </div>
                            {/* <img src={mem.img} alt={mem.title} className="w-full h-full object-cover" /> */}
                        </div>

                        <h3 className="text-xl font-outfit font-bold text-gray-800">{mem.title}</h3>
                        <p className="text-sm text-gray-500 font-outfit">{mem.date}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MemoryGallery;
