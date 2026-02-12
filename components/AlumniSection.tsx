'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Alumni {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  author: string;
  profileUrl: string; // Tambahkan URL profil di sini
}

const alumni: Alumni[] = [
  {
    id: 1,
    name: 'M Fikri Asyam Jauhary',
    role: 'Software Engineer',
    image: 'https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg',
    quote: 'Pendidikan di MTs Sunan Drajat membentuk karakter saya menjadi pribadi yang tangguh.',
    author: 'Angkatan 2024',
    profileUrl: 'https://fikriasyam.vercel.app/' // Contoh URL
  },
  {
    id: 2,
    name: 'Ahmad',
    role: 'Perbankan Syariah',
    image: 'https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg',
    quote: 'Ilmu agama dan umum yang seimbang adalah bekal terbaik untuk masa depan.',
    author: 'Angkatan 2012',
    profileUrl: '#' // Contoh URL
  },
  {
    id: 3,
    name: 'Muhammad',
    role: 'Desainer Grafis',
    image: 'https://i.pinimg.com/736x/f5/47/d8/f547d800625af9056d62efe8969aeea0.jpg',
    quote: 'Terima kasih MTs Sunan Drajat atas bimbingan para guru yang luar biasa.',
    author: 'Angkatan 2015',
    profileUrl: '#' // Contoh link internal
  },
];

export default function AlumniSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 font-heading uppercase tracking-tight">Alumni Kami</h2>
        <div className="h-1.5 w-12 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-500 mt-4 font-medium">Inspirasi dari mereka yang telah melangkah lebih jauh</p>
      </div>

      <div className="flex relative max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          className={`flex gap-8 ${!isMobile ? 'md:grid md:grid-cols-3 w-full' : 'whitespace-nowrap'}`}
          animate={isMobile ? { x: ["0%", "-50%"] } : { x: 0 }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {(isMobile ? [...alumni, ...alumni] : alumni).map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-[300px] md:w-full bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col shrink-0 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-2xl shadow-md border-2 border-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden text-left">
                  <h4 className="font-bold text-[15px] text-gray-900 truncate leading-tight">{item.name}</h4>
                  <p className="text-[10px] text-primary font-black truncate uppercase tracking-[0.15em] mt-1">{item.role}</p>
                </div>
              </div>

              <div className="whitespace-normal text-left flex-grow">
                <p className="text-gray-600 text-[14px] leading-relaxed mb-4 italic font-medium">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-2">
                   <div className="h-[1px] w-4 bg-yellow-400"></div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.author}</p>
                </div>
              </div>

              {/* URL PROFIL DINAMIS */}
              <Link 
                href={item.profileUrl} 
                target={item.profileUrl.startsWith('http') ? "_blank" : "_self"}
                className="mt-8 pt-5 border-t border-gray-50 flex items-center justify-between group/link"
              >
                <span className="text-[11px] font-black uppercase tracking-widest text-gray-900 group-hover/link:text-primary transition-colors">
                  Lihat Profil
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/link:bg-yellow-400 group-hover/link:text-primary transition-all">
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}