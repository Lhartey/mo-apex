'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from 'antd';
import { useRef } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { projects } from '@/app/data/projects';
import Clients from '@/components/Clients';
import ContactForm, { ContactFormHandle } from '@/components/ContactForm';

export default function Home() {
    const heroImage = '/images/hero/hero-main.jpg'; // pexels-declan-17586112.jpg
    const ambient1 = '/images/ambient/ambient-1.jpg'; // pexels-adrien-olichon
    const ambient2 = '/images/ambient/ambient-2.jpg'; // pexels-quan-tran

    const contactRef = useRef<ContactFormHandle>(null);

    const handleStartProject = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                if (contactRef.current?.triggerRing) {
                    contactRef.current.triggerRing();
                }
            }, 800);
        }
    };

    // Use first 3 projects for the showcase
    const recentProjects = projects.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${heroImage}')` }}
                >
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent" />
                </motion.div>

                <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12 text-white">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        className="max-w-3xl"
                    >
                        <motion.h5
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-gold-500 font-bold uppercase tracking-[0.3em] mb-6 text-sm md:text-base"
                        >
                            Architectural • Engineering • Construction
                        </motion.h5>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-5xl md:text-9xl font-black tracking-tight mb-8 leading-[0.85]"
                        >
                            BUILDING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gold-500">TOMORROW'S</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">LEGACY.</span>
                        </motion.h1>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 leading-relaxed font-light border-l-2 border-gold-500 pl-6"
                        >
                            Mo Apex is a solely design, engineering, building, and development organization committed to providing creative, long-lasting, and reliable solutions.
                        </motion.p>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/projects">
                                <Button type="primary" size="large" className="bg-white text-dark-900 border-none hover:bg-gold-500 hover:text-white h-16 px-12 text-base font-bold uppercase tracking-wider rounded-none transition-all duration-300 shadow-xl">
                                    View Portfolio
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button size="large" ghost className="text-white border-white hover:text-gold-500 hover:border-gold-500 h-16 px-12 text-base font-bold uppercase tracking-wider rounded-none backdrop-blur-sm transition-all duration-300">
                                    Our Services
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5, y: [0, 15, 0] }}
                    transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase font-bold">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
                </motion.div>
            </section>

            {/* Introduction / Statement with Ambient Image */}
            <section className="relative py-48 bg-dark-950 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20 bg-fixed bg-cover bg-center grayscale pointer-events-none"
                    style={{ backgroundImage: `url('${ambient1}')` }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
                            Precision in every detail from <br />
                            <span className="text-gold-500 italic font-light">concept to creation.</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-xl leading-relaxed space-y-8 font-light"
                    >
                        <p>
                            At MO Apex Design and Build, we offer a full spectrum of construction services to bring your vision to life. From innovative Architectural and Structural Designs to precise Project Estimation and expert Construction Management.
                        </p>
                        <p>
                            We provide tailored solutions in Building Consultancy, M.E.P systems, and more, ensuring that your project is completed on time, within budget, and to the highest standards.
                        </p>
                        <Link href="/about" className="group inline-flex items-center gap-4 text-white hover:text-gold-500 font-bold transition-all duration-300 mt-4">
                            <span>More About Us</span>
                            <div className="w-12 h-[1px] bg-gold-500 group-hover:w-20 transition-all duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-40 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                        <div>
                            <motion.h5
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-gold-600 font-bold uppercase tracking-[0.2em] text-xs mb-4"
                            >
                                Selected Works
                            </motion.h5>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-bold text-dark-900 tracking-tighter"
                            >
                                Featured <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-900 to-gray-400">Projects.</span>
                            </motion.h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/projects">
                                <Button type="link" className="text-dark-900 hover:text-gold-500 text-lg font-bold flex items-center gap-3 p-0 uppercase tracking-widest border-b border-dark-900/10 pb-2">
                                    View All Works <ArrowRightOutlined />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {recentProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="group cursor-pointer"
                            >
                                <Link href={`/projects/${project.id}`}>
                                    <div className="relative aspect-[3/4] overflow-hidden bg-dark-900 mb-8 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0 contrast-125"
                                            style={{ backgroundImage: `url('${project.images[0].replace(/'/g, "\\'")}')` }}
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                                        {/* Floating Content on Image */}
                                        <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.category}</p>
                                            <h3 className="text-2xl text-white font-bold leading-tight">{project.title}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Collaboration Section */}
            <Clients />

            {/* Our Process Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-24">
                        <motion.h5
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gold-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
                        >
                            Our Methodology
                        </motion.h5>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-dark-900 tracking-tighter"
                        >
                            Seamless Execution <br /> <span className="text-gray-400 font-light">From Start to Finish.</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { step: '01', title: 'Consultation', desc: 'Understanding your vision and project requirements in depth.' },
                            { step: '02', title: 'Design & Planning', desc: 'Creating precise architectural and structural blueprints.' },
                            { step: '03', title: 'Engineering', desc: 'Optimizing structural integrity and technical systems.' },
                            { step: '04', title: 'Construction', desc: 'Bringing the design to life with expert craftsmanship.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="text-7xl font-black text-gray-100 group-hover:text-gold-50 transition-colors duration-500 absolute -top-10 -left-4 z-0">
                                    {item.step}
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold mb-4 text-dark-900 group-hover:text-gold-600 transition-colors">{item.title}</h4>
                                    <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA Section ... */}
            <section className="relative py-48 bg-dark-900 text-white overflow-hidden text-center">
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none scale-110"
                    style={{ backgroundImage: `url('${ambient2}')` }}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Ready to build <br /> <span className="italic text-gold-500">the future?</span></h2>
                        <p className="text-gray-400 mb-16 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Let's collaborate to create precise, sustainable, and beautiful structural solutions for your next landmark project.
                        </p>

                        {/* Animated Ring Button */}
                        <div className="flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="animate-ring p-[4px] bg-transparent"
                            >
                                <Button
                                    size="large"
                                    onClick={handleStartProject}
                                    className="bg-gold-500 hover:bg-gold-600 text-black border-none h-16 px-16 text-lg font-black uppercase tracking-widest rounded-none shadow-2xl transition-all duration-300 relative z-10"
                                >
                                    Start Your Project
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactForm ref={contactRef} />
        </div>
    );
}
