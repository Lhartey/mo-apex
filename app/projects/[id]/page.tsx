'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'antd';
import { ArrowLeftOutlined, ExpandOutlined } from '@ant-design/icons';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { projects } from '@/app/data/projects';

export default function ProjectDetail() {
    const params = useParams();
    const id = params?.id;
    const project = projects.find(p => p.id === id);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    if (!project) {
        return notFound();
    }

    const slides = project.images.map(src => ({ src }));

    return (
        <div className="min-h-screen bg-white">
            {/* Header Image */}
            <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        priority
                        quality={85}
                        sizes="100vw"
                        className="object-cover opacity-70"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
                    <Link href="/projects" className="inline-block mb-6">
                        <Button
                            type="text"
                            icon={<ArrowLeftOutlined />}
                            className="text-white hover:text-gold-500 pl-0 font-bold transition-all duration-300"
                        >
                            Back to Projects
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
                    <p className="text-gold-500 text-lg uppercase tracking-wider">{project.category}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Sidebar Info */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-4">Project Details</h3>

                        <div className="space-y-6 text-gray-600">
                            <p className="text-lg leading-relaxed">
                                {project.description || "No description available for this project."}
                            </p>

                            {/* If we had more structured data, it would go here. For now, placeholders */}
                            <div className="pt-6">
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">Status</div>
                                <div className="font-medium text-dark-900">Completed</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">Location</div>
                                <div className="font-medium text-dark-900">Liberia / West Africa</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-6">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-[4/3] bg-gray-100 cursor-pointer overflow-hidden group rounded-sm"
                                onClick={() => {
                                    setLightboxIndex(idx);
                                    setLightboxOpen(true);
                                }}
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title} - View ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={75}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <ExpandOutlined className="text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={slides}
            />
        </div>
    );
}
