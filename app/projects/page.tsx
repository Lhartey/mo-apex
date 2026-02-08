'use client';

import { useState } from 'react';
import { Tabs } from 'antd';
import { projects } from '@/app/data/projects';
import ProjectCard from '@/components/ProjectCard';

const { TabPane } = Tabs;

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const categories = [
        { key: 'all', label: 'All Projects' },
        { key: 'Full Consultation & Design', label: 'Full Consultation & Design' },
        { key: 'Projects Contributed to', label: 'Projects Contributed to' },
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-50 pt-32 pb-16 px-6 md:px-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    A showcase of our engineering precision and architectural innovation across diverse sectors.
                </p>
            </div>

            {/* Filter & Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <Tabs
                    defaultActiveKey="all"
                    centered
                    className="mb-12 custom-tabs"
                    onChange={key => setActiveCategory(key)}
                    items={categories.map(cat => ({
                        key: cat.key,
                        label: <span className="text-base font-medium px-4">{cat.label}</span>,
                    }))}
                />

                {/* Masonry Layout using CSS Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center text-gray-400 py-20">No projects found in this category.</div>
                )}
            </div>
        </div>
    );
}
