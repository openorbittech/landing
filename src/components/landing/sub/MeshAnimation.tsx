"use client"
import { motion } from 'framer-motion'

// Animated mesh gradient overlay
function AnimatedMeshGradientOverlay() {

    return (
        <motion.div
            animate={{
                background: [
                    "radial-gradient(circle at 0% 0%, rgba(79, 109, 255, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(79, 109, 255, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(79, 109, 255, 0.3) 0%, transparent 50%)",
                ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
        />
    )
}

export default AnimatedMeshGradientOverlay