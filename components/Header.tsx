'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { motion, useScroll } from 'framer-motion';

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    const menuItems = [
        { label: <Link href="/">Home</Link>, key: '/' },
        { label: <Link href="/projects">Projects</Link>, key: '/projects' },
        { label: <Link href="/services">Services</Link>, key: '/services' },
        { label: <Link href="/about">About Us</Link>, key: '/about' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: 'transform, top, width, border-radius' }}
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex items-center justify-between ${isScrolled
                ? 'top-0 w-full h-20 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 px-6 md:px-12 rounded-none'
                : 'top-6 mx-auto w-[92%] max-w-7xl h-20 liquid-glass rounded-full px-10 shadow-2xl'
                }`}
        >
            <Link href="/" className="font-bold text-2xl tracking-tighter transition-all duration-300 hover:scale-105 text-dark-900">
                MO-APEX <span className="text-gold-500">DESIGN</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
                <Menu
                    mode="horizontal"
                    items={menuItems}
                    selectedKeys={[pathname]}
                    className="bg-transparent border-none min-w-[450px] justify-end font-bold text-xs tracking-[0.2em] uppercase transition-all duration-500 nav-link-glow"
                    disabledOverflow
                    style={{ background: 'transparent' }}
                />
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={() => setMobileOpen(true)}
                    className={`text-xl transition-colors duration-500 ${isScrolled ? 'text-dark-900' : 'text-white'}`}
                />
            </div>

            <Drawer
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                title="Menu"
                placement="right"
                className="font-bold"
            >
                <Menu
                    mode="vertical"
                    items={menuItems}
                    selectedKeys={[pathname]}
                    className="border-none text-lg font-bold tracking-tight"
                    onClick={() => setMobileOpen(false)}
                />
            </Drawer>
        </motion.header>
    );
}
