import { motion } from "framer-motion";

const memories = [
    { id: 1, title: "The Smile", desc: "Keeping it classic in every sense.", img: "/photo1.jpeg" },
    { id: 2, title: "The Original", desc: "Life imitates art, but the reality is better.", img: "/photo2.jpeg" },
    { id: 3, title: "The Selfie", desc: "Low light, high energy.", img: "/photo3.jpeg" },
    { id: 4, title: "The Stare", desc: "Find someone who looks at you like this.", img: "/photo4.jpeg" },
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
                        className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-pink-100 hover:shadow-2xl hover:border-valentine-red cursor-pointer group flex flex-col items-center text-center"
                    >
                        <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden mb-4 relative group-hover:shadow-inner">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
                                <p className="text-white font-medium text-center">{mem.desc}</p>
                            </div>

                            <img
                                src={mem.img}
                                alt={mem.title}
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full bg-pink-100 flex flex-col items-center justify-center text-pink-400 text-xs text-center p-2"><p>Missing Photo</p><code class="bg-white/50 px-1 rounded mt-1">${mem.img}</code></div>`;
                                }}
                            />
                        </div>

                        <h3 className="text-xl font-outfit font-bold text-gray-800">{mem.title}</h3>
                        {/* <p className="text-sm text-gray-500 font-outfit">{mem.date}</p> */}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MemoryGallery;
