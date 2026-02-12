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
}

const alumni: Alumni[] = [
  {
    id: 1,
    name: 'Alumni Sukses 1',
    role: 'Pengusaha',
    image: 'https://ui-avatars.com/api/?name=Alumni+1&background=random',
    quote: 'Pendidikan di MTs Sunan Drajat membentuk karakter saya menjadi pribadi yang tangguh.',
    author: 'Angkatan 2010'
  },
  {
    id: 2,
    name: 'Alumni Sukses 2',
    role: 'Akademisi',
    image: 'https://ui-avatars.com/api/?name=Alumni+2&background=random',
    quote: 'Ilmu agama dan umum yang seimbang adalah bekal terbaik untuk masa depan.',
    author: 'Angkatan 2012'
  },
  {
    id: 3,
    name: 'Alumni Sukses 3',
    role: 'Profesional',
    image: 'https://ui-avatars.com/api/?name=Alumni+3&background=random',
    quote: 'Terima kasih MTs Sunan Drajat atas bimbingan para guru yang luar biasa.',
    author: 'Angkatan 2015'
  },
];

export default function AlumniSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Cek ukuran layar saat komponen di-mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Alumni Kami</h2>
        <p className="text-gray-500 mt-2">Inspirasi dari mereka yang telah melangkah lebih jauh</p>
      </div>

      <div className="flex relative max-w-6xl mx-auto px-6">
        <motion.div 
          className={`flex gap-6 ${!isMobile ? 'md:grid md:grid-cols-3 w-full' : 'whitespace-nowrap'}`}
          // Animasi hanya jalan kalau isMobile = true
          animate={isMobile ? { x: ["0%", "-50%"] } : { x: 0 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Di Mobile: Render double data agar loop mulus. 
            Di Desktop: Render sekali saja. 
          */}
          {(isMobile ? [...alumni, ...alumni] : alumni).map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-[280px] md:w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-full border-2 border-blue-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden text-left">
                  <h4 className="font-bold text-sm text-gray-900 truncate">{item.name}</h4>
                  <p className="text-[11px] text-blue-600 font-semibold truncate uppercase tracking-widest">{item.role}</p>
                </div>
              </div>

              <div className="whitespace-normal text-left flex-grow">
                <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">
                  &quot;{item.quote}&quot;
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">— {item.author}</p>
              </div>

              <Link 
                href={`/alumni/${item.id}`} 
                className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between group/link"
              >
                <span className="text-xs font-bold text-gray-900 group-hover/link:text-blue-600 transition-colors">Lihat Profil</span>
                <ArrowRight size={16} className="text-gray-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}