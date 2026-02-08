'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <div className="relative h-[60vh] bg-dark-900 flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 opacity-40 bg-cover bg-center grayscale scale-105"
                    style={{ backgroundImage: "url('/images/ambient/ambient-3.jpg')" }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                    <h5 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h5>
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Us</span>
                    </h1>
                </div>
            </div>

            {/* Main Content - Two Column Layout */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-8 text-dark-900">Building Tomorrow's Legacy</h3>
                        <div className="text-lg text-gray-600 space-y-8 leading-relaxed">
                            <p>
                                Mo Apex is a solely design, engineering, building, and development organization committed to providing creative, long-lasting, and reliable solutions spanning multiple fields and industries.
                            </p>
                            <p>
                                Our team is made up of highly qualified experts from a variety of fields with years of experience working together. Our distinguishing characteristics are accountability, clarity, and client pleasure.
                            </p>
                            <div className="pl-6 border-l-4 border-gold-500">
                                <p className="text-xl font-medium text-dark-900 italic">
                                    "Our primary goal is to use accuracy and professionalism to turn our clients' visions into reality. All while building excellent relationships and trust."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Admin Image 1 - Main */}
                        <div className="relative z-10 aspect-[4/5] w-3/4 ml-auto bg-gray-200 shadow-2xl">
                            <img
                                src="/images/about/IMG-20241222-WA0004.jpg"
                                alt="Construction Management"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        {/* Admin Image 2 - Offset */}
                        <div className="absolute top-1/2 left-0 w-1/2 aspect-square z-20 shadow-xl border-8 border-white">
                            <img
                                src="/images/about/IMG-20241222-WA0002121.jpg"
                                alt="Site Work"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Values Section */}
            <div className="bg-gray-50 py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Innovation', desc: "We utilize cutting edge methods to deliver modern solutions." },
                            { title: 'Precision', desc: "Accuracy is at the heart of our engineering and design process." },
                            { title: 'Integrity', desc: "Building trust through transparency and accountability." }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 border-b-4 border-gold-500 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-xl font-bold mb-4">{val.title}</h4>
                                <p className="text-gray-500">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
