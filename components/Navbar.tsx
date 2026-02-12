'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // py-3 & py-4 membuat navbar lebih tipis sehingga logo otomatis lebih ke atas
        isScrolled ? "bg-[#1BB32B] shadow-md py-3" : "bg-transparent py-4"
      )}
    >
      {/* px-2 agar lebih mepet ke samping kiri layar */}
      <div className="container-custom px-2 md:px-4"> 
        <div className="flex items-center justify-between">
          
          {/* Logo Area: -mt-2 (naik ke atas) dan -ml-2 (geser ke kiri) */}
          <Link href="/" className="flex items-center justify-start group -mt-2 -ml-2 w-full">
    {/* Container Logo */}
    <div className="relative w-20 h-20 overflow-hidden hover:scale-105 transition-transform flex-shrink-0">
      <Image 
        src="/logomts.png" 
        alt="Logo MTs Sunan Drajat" 
        fill 
        className="object-contain -translate-y-1"
        priority
      />
    </div>
    
    {/* Container Teks */}
    <div className="flex flex-col items-start -space-y-1"> 
        <span className="font-bold text-lg leading-tight text-white">
          MTs Sunan Drajat
        </span>
        <span className={cn("text-[10px] font-medium transition-colors", isScrolled ? "text-gray-100" : "text-gray-200")}>
          Kedungadem, Bojonegoro.
        </span>
    </div>
</Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavItem
              title="Profil"
              isScrolled={isScrolled}
              items={[
                { label: 'Sambutan Kepala Sekolah', href: '/page/sambutan' },
                { label: 'Sejarah', href: '/page/sejarah' },
                { label: 'Visi & Misi', href: '/page/visimisi' },
                { label: 'Kondisi Sekolah', href: '/page/kondisisekolah' },
                { label: 'Sarana Prasarana', href: '/sarpra' },
                { label: 'Adiwiyata', href: '/adiwiyata' },
              ]}
            />
            <NavItem
              title="Berita"
              isScrolled={isScrolled}
              items={[
                { label: 'Berita Terbaru', href: '/news' },
                { label: 'Info Sekolah', href: '/info' },
                { label: 'Agenda', href: '/agenda' },
                { label: 'Galeri', href: '/galery' },
              ]}
            />
            <NavItem
              title="Keuangan"
              isScrolled={isScrolled}
              items={[
                { label: 'BOS', href: '/keuangan/bos' },
                { label: 'APBD', href: '/keuangan/apbd' },
                { label: 'Komite', href: '/keuangan/komite' },
              ]}
            />
            <NavItem
              title="Layanan"
              isScrolled={isScrolled}
              items={[
                { label: 'Rapor Digital (RDM)', href: 'https://mtssunandrajat.rdm9.my.id/' },
                { label: 'Ekstrakurikuler', href: '#ekstrakurikuler' },
                { label: 'Laboratorium', href: '/laboratorium' },
                { label: 'Perpustakaan', href: '/perpustakaan' },
              ]}
            />
            <NavLink href="#prestasi" isScrolled={isScrolled}>Prestasi</NavLink>
            <NavLink href="#alumni" isScrolled={isScrolled}>Alumni</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Kontak</NavLink>
            
            <div className={cn("ml-4 flex items-center space-x-1 px-3 py-1.5 rounded-full border transition-all", isScrolled ? "border-white/20 text-white bg-white/10" : "border-white/20 text-white bg-white/10")}>
              <Globe size={14} />
              <span className="text-xs font-semibold">ID</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("lg:hidden p-2 rounded-full transition-colors", isScrolled ? "bg-white/10 text-white" : "bg-white/10 text-white")}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100"
            >
                <div className="p-4 space-y-2">
                    <MobileNavItem title="Profil Sekolah" items={[
                    { label: 'Sambutan Kepala Sekolah', href: '/page/sambutan' },
                    { label: 'Sejarah', href: '/page/sejarah' },
                    { label: 'Visi & Misi', href: '/page/visimisi' },
                    ]} />
                    <MobileNavItem title="Berita" items={[
                    { label: 'Berita Terbaru', href: '/news' },
                    { label: 'Info Sekolah', href: '/info' },
                    { label: 'Galeri', href: '/galery' },
                    ]} />
                    
                    <Link href="#prestasi" className="block px-2 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Prestasi</Link>
                    <Link href="#alumni" className="block px-2 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Alumni</Link>
                    <Link href="#contact" className="block px-2 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Kontak</Link>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// --- Komponen Pendukung (NavLink, NavItem, MobileNavItem) ---

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "px-3 py-2 text-sm font-medium transition-all rounded-md",
                isScrolled ? "text-white/90 hover:text-white hover:bg-white/10" : "text-white/90 hover:text-white hover:bg-white/10"
            )}
        >
            {children}
        </Link>
    )
}

function NavItem({ title, items, isScrolled }: { title: string; items: { label: string; href: string }[]; isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative group px-1" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={cn("flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-all rounded-md group-hover:bg-white/10 text-white")}>
        <span>{title}</span>
        <ChevronDown size={14} className={cn("transition-transform duration-200", isOpen ? "rotate-180" : "")} />
      </button>
      <AnimatePresence>
        {isOpen && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 z-50 p-2">
            {items.map((item, index) => (
                <Link key={index} href={item.href} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-[#1BB32B] rounded-lg transition-colors">
                {item.label}
                </Link>
            ))}
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-50 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-3 px-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">
        <span>{title}</span>
        <ChevronDown size={16} className={cn("transition-transform", isOpen ? "rotate-180" : "")} />
      </button>
      <AnimatePresence>
        {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="pl-4 pb-2 space-y-1">
                {items.map((item, index) => (
                    <Link key={index} href={item.href} className="block py-2 px-2 text-sm text-gray-500 hover:text-[#1BB32B] hover:bg-green-50 rounded-md">
                    {item.label}
                    </Link>
                ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}