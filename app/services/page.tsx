'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'antd';
import { services } from '@/app/data/services';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white text-dark-900 pb-24">
            {/* Heavy, Structural Hero */}
            <div className="relative pt-32 pb-24 px-6 md:px-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h5 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">What We Do</h5>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl tracking-tight mb-8">
                            A Full Spectrum of <br /> Construction Services.
                        </h1>
                        <p className="max-w-2xl text-xl text-gray-500 leading-relaxed font-light">
                            We offer end-to-end solutions to bring your vision to life. From innovative Architectural and Structural Designs to precise Project Estimation and expert Construction Management.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            {/* Image Card */}
                            <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-gray-100">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    quality={75}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-0 group-hover:grayscale-[20%]"
                                />
                                {/* Heavy Border Accent */}
                                <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold-500/0 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-gold-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <div className="h-0.5 w-12 bg-gray-200 group-hover:bg-gold-500 transition-colors duration-300 mb-4" />
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Heavy CTA Section */}
            <div className="bg-dark-900 text-white py-32 px-6 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build your dream space.</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        We provide tailored solutions ensuring your project is completed on time, within budget, and to the highest standards.
                    </p>

                    <div className="flex justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="animate-ring p-[4px] bg-transparent"
                        >
                            <Link href="/#contact-section">
                                <Button
                                    size="large"
                                    className="bg-gold-500 hover:bg-gold-600 text-black border-none h-16 px-16 text-lg font-black uppercase tracking-widest rounded-none shadow-2xl transition-all duration-300 relative z-10"
                                >
                                    Get In Touch
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
