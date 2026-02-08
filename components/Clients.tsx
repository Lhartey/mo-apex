'use client';

import { motion } from 'framer-motion';
import { clients } from '@/app/data/clients';

export default function Clients() {
    // Duplicate for infinite scroll effect
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.h5
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gold-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
                >
                    Trusted By
                </motion.h5>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-dark-900 tracking-tighter"
                >
                    Industry <span className="text-gold-500">Leaders.</span>
                </motion.h2>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-hidden group">
                {/* Gradient Shadows for smooth entry/exit */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{
                        x: [0, -1540], // 5 clients * (260px + 48px gap)
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 45, // Slightly slower for smoother visual
                            ease: "linear",
                        },
                    }}
                    style={{ willChange: "transform" }}
                    className="flex flex-nowrap gap-12 whitespace-nowrap py-4"
                >
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-xl hover:border-gold-500/30 transition-all duration-700 group/item relative overflow-hidden"
                            style={{
                                width: '260px',
                                height: '130px',
                                flexShrink: 0,
                                transform: 'translateZ(0)', // Force GPU
                                willChange: 'transform'
                            }}
                        >
                            {/* Subtle Background Structural Detail */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 -mr-8 -mt-8 rotate-45 group-hover/item:bg-gold-50 transition-colors" />

                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain filter grayscale opacity-50 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700 relative z-10 scale-90 group-hover/item:scale-110"
                                loading="lazy"
                                style={{ willChange: "transform, filter, opacity" }}
                            />

                            {/* Decorative Frame Accents */}
                            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold-500 group-hover/item:w-full transition-all duration-700 ease-in-out" />
                            <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gold-500 group-hover/item:w-full transition-all duration-700 ease-in-out" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
