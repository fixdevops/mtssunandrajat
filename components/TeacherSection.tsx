'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

const teachers = [
  {
    name: 'Ngadiya, S.Pd., M.M.',
    position: 'Kepala Madrasah',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Muhammad Anas, S.Pd.I',
    position: 'Guru PAI & Budi Pekerti',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Nurul Yaqin, S.Ag., M.Si.',
    position: 'Guru PAI & Budi Pekerti',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Puji Utami, S.Pd.',
    position: 'Guru Bahasa Indonesia',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  // Tambahkan data lainnya...
];

export default function TeacherSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (teachers.length - 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (teachers.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teachers.length - 4 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Tenaga Pendidik</h2>
            <p className="text-gray-500 mt-2">Dibimbing oleh staf pengajar yang kompeten di bidangnya.</p>
          </div>
          
          <div className="flex gap-2">
            <button onClick={prevSlide} className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {teachers.map((teacher, index) => (
              <div 
                key={index} 
                className="min-w-[calc(100%-24px)] sm:min-w-[calc(50%-24px)] lg:min-w-[calc(25%-24px)] group"
              >
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-all text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 opacity-50"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-md font-bold text-gray-900 leading-tight mb-1">
                    {teacher.name}
                  </h4>
                  <p className="text-xs font-medium text-blue-600 mb-4 uppercase tracking-wide">
                    {teacher.position}
                  </p>
                  
                  <div className="flex justify-center text-gray-300">
                    <GraduationCap size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link href="/staff/guru" className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
            Direktori Guru
          </Link>
          <Link href="/staff/karyawan" className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm">
            Staf Karyawan
          </Link>
        </div>
      </div>
    </section>
  );
}