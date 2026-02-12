'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ChevronDown, Newspaper, Image as ImageIcon, Phone } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/123456789i.png"
          alt="Gedung Sekolah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y }}
        className="relative z-10 container-custom text-center text-white px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-4 text-primary-foreground">
            Selamat Datang di Website Resmi
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl text-gray-200 font-bold mb-4 tracking-tight"
        >
          MTs Sunan Drajat
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-10 text-gray-200 font-light max-w-2xl mx-auto"
        >
          Geger, Kedungadem, Bojonegoro
          <br />
          <span className="text-base opacity-80 mt-2 block">Mewujudkan Generasi Islami, Cerdas, dan Berkarakter</span>
        </motion.p>

        {/* Search Form */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.8 }}
           className="max-w-2xl mx-auto mb-10"
        >
            <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500 animate-pulse" />
            <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden p-1 transition-all focus-within:bg-white/20 focus-within:border-white/50 focus-within:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Search className="ml-4 text-gray-300 w-5 h-5" />
                <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari informasi, berita, atau kegiatan..."
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-none"
                />
                <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary/50"
                >
                Cari
                </button>
            </div>
            </form>
        </motion.div>
        
        {/* Quick Links */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
        >
            <QuickLink href="/news" icon={<Newspaper size={16} />} label="Berita" />
            <QuickLink href="/galery" icon={<ImageIcon size={16} />} label="Galeri" />
            <QuickLink href="#contact" icon={<Phone size={16} />} label="Kontak" />
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
             <ChevronDown className="text-white/70 w-8 h-8" />
            </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function QuickLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link href={href} className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-200 hover:text-white transition-all hover:scale-105">
            {icon}
            <span>{label}</span>
        </Link>
    )
}
