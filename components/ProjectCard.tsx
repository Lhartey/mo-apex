'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/app/data/projects';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 break-inside-avoid group"
        >
            <Link href={`/projects/${project.id}`}>
                <div className="relative overflow-hidden mb-3 bg-gray-100">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-sm font-medium">View Project</span>
                    </div>
                </div>
                <h3 className="text-lg font-bold leading-tight group-hover:text-gold-500 transition-colors">{project.title}</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{project.category}</p>
            </Link>
        </motion.div>
    );
}
