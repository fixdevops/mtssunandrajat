'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, ArrowRight, Video, ChevronRight } from 'lucide-react';

const carouselImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
];

const announcements = [
  {
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&q=80',
    title: 'ASESMEN SUMATIF TENGAH SEMESTER GANJIL TAHUN 2025',
    link: '/info/detail/79',
    date: '12 Jan 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&q=80',
    title: 'Pembagian Ruang Seleksi Mata Pelajaran Pilihan Coding',
    link: '/info/detail/78',
    date: '10 Jan 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80',
    title: 'Pengaturan Waktu KBM dan Daftar Guru Tahun Pelajaran 2025/2026',
    link: '/info/detail/77',
    date: '05 Jan 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=80',
    title: 'Pengumuman Susunan Kelas X/ Fase E',
    link: '/info/detail/76',
    date: '02 Jan 2025'
  },
];

export default function AnnouncementSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Carousel */}
          <div className="lg:col-span-12 xl:col-span-5">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                        src={carouselImages[currentSlide]}
                        alt={`Slide ${currentSlide + 1}`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-2">Unggulan</span>
                        <h3 className="text-white text-xl font-bold">Kegiatan Unggulan Madrasah</h3>
                    </div>
                  </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 w-2 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Announcements */}
          <div className="lg:col-span-6 xl:col-span-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-gray-800 flex items-center">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3 text-primary">
                        <Megaphone size={20} />
                    </div>
                    Pengumuman
                </h4>
                <Link href="/info" className="text-xs font-medium text-primary hover:text-primary-dark flex items-center">
                    Lihat Semua <ChevronRight size={14} />
                </Link>
              </div>
              
              <div className="space-y-4 flex-1">
                {announcements.map((announcement, index) => (
                  <Link href={announcement.link} key={index} className="flex space-x-4 group p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-16 h-16 relative flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={announcement.image}
                        alt={announcement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {announcement.title}
                      </h5>
                      <span className="text-xs text-gray-500 mt-1 block">{announcement.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Principal's Message */}
          <div className="lg:col-span-6 xl:col-span-3">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-secondary/10 rounded-lg mr-3 text-secondary">
                    <Video size={20} />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Sambutan Kepala</h4>
              </div>
              
              <div className="mb-4 relative rounded-xl overflow-hidden group shadow-md">
                 <div className="aspect-video bg-gray-900 relative">
                    {/* Placeholder for video styling */}
                     <Image 
                        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
                        alt="Kepala Sekolah"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border-2 border-white cursor-pointer hover:scale-110 transition-transform">
                             <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                     </div>
                 </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-4 flex-1">
                <em>Bismillahirrohmanirrahim, Assalamu&apos;alaikum Wr. Wb.</em>
                <br />
                Segala puji hanya untuk Allah SWT dan shalawat serta salam semoga tercurah atas nabi yang terakhir...
              </p>
              <Link
                href="/page/sambutan"
                className="mt-auto inline-flex items-center justify-center w-full py-2.5 bg-gray-50 text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors border border-dashed border-gray-300 hover:border-transparent"
              >
                Selengkapnya <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
