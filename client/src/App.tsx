import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import HeartParticles from './effects/HeartParticles'
import AudioController from './components/AudioController'
import Hero from './components/Hero'
import PhotoAltar from './components/PhotoAltar'
import MemoryGallery from './components/MemoryGallery'
import LoveLetter from './components/LoveLetter'
import ProposalGame from './components/ProposalGame'
import Countdown from './components/Countdown'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-valentine-soft text-gray-800 overflow-hidden relative">
      <HeartParticles />
      <AudioController />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <PhotoAltar />
            <MemoryGallery />
            <LoveLetter />
            <Countdown />
            <ProposalGame />

            <footer className="text-center py-8 text-gray-500 font-outfit text-sm">
              Made with ❤️ just for you
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
