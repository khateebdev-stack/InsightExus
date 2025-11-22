"use client";

import { motion } from "framer-motion";

export function DigitalEngine() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Core Glow */}
            <div className="absolute w-[200px] h-[200px] bg-primary/20 rounded-full blur-[80px] animate-pulse" />

            {/* Rotating Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] border border-primary/30 rounded-full border-dashed"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[250px] h-[250px] border border-accent/30 rounded-full border-dotted"
            />

            {/* Central Hexagon Structure */}
            <div className="relative w-32 h-32">
                <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm flex items-center justify-center transform-style-3d"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                    <div className="w-16 h-16 bg-accent/20 rounded-full animate-ping" />
                </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                    }}
                    style={{
                        top: `${50 + Math.sin(i) * 30}%`,
                        left: `${50 + Math.cos(i) * 30}%`,
                    }}
                />
            ))}
        </div>
    );
}
